import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchResults from "./components/SearchResults";
import styled from "styled-components";

export const Base_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(Base_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setFilteredData(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    // console.log(searchValue);
    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedButton(type);
  };

   const filteredButtons = [
    { name: "All", type: "all", },
    { name: "Breakfast", type: "breakfast", },
    { name: "Lunch", type: "lunch", },
    { name: "Dinner", type: "dinner", },
  ];


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="Logo">
            <img src="./logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Searct Food..."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filteredButtons.map((value) => (
            <Button 
            isSelected={selectedButton === value.type}
            key={value.name} onClick={() => filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>

      <SearchResults data={filteredData} />
    </>
  );
}

export default App;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

const TopContainer = styled.section`
  height: 140px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 8px;
      padding: 0px 16px;
      height: 40px;
      font-size: 16px;
      text-decoration: none;
      &::placeholder {
        color: white;
      }
      &:focus {
        outline: none;
        border-color:rgb(255, 115, 0);
        box-shadow: 0px 0px 5px rgba(255, 115, 0, 0.5);
      }
    }
    
  }
    @media (0 < width < 600px) {
      flex-direction: column;
      height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 30px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#ff0000" : "#ff4343")} ;
  outline: 1px solid ${({ isSelected }) => (isSelected ? "rgb(255, 217, 217)" : "#ff4343")} ;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background: #ff0000;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }

`;
