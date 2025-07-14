import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "VEG RAMEN",
      price: 120,
      text: "Delicious bowl of spicy vegetable noodles in rich broth, inspired by Asian flavors.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "CAKE",
      price: 150,
      text: "Soft and moist eggless cake slice with rich cream, perfect for tea-time or dessert.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 90,
      text: "Crispy veg patty with fresh lettuce, tomato, and chutney in a toasted bun.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 60,
      text: "Fluffy Indian-style pancakes served with honey or chocolate drizzle.",
      image: "/images/pancake.png",
      type: "dinner",
    },

    {
      name: "VEG BIRYANI",
      price: 120,
      text: "Aromatic basmati rice cooked with fresh vegetables and spices.",
      image: "/images/veg-biryani.png",
      type: "lunch",
    },
    {
      name: "PANEER TIKKA",
      price: 150,
      text: "Grilled cottage cheese cubes marinated in spicy yogurt masala.",
      image: "/images/paneer-tikka.png",
      type: "dinner",
    },
    {
      name: "MASALA DOSA",
      price: 60,
      text: "Crispy South Indian dosa filled with spiced mashed potatoes.",
      image: "/images/masala-dosa.png",
      type: "breakfast",
    },
    {
      name: "CHHOLE BHATURE",
      price: 70,
      text: "Fluffy bhature served with spicy chickpea curry.",
      image: "/images/chhole-bhature.png",
      type: "lunch",
    },
    {
      name: "MIX VEG CURRY",
      price: 90,
      text: "A delicious mix of seasonal vegetables cooked in creamy gravy.",
      image: "/images/mix-veg-curry.png",
      type: "dinner",
    },
    {
      name: "ALOO PARATHA",
      price: 40,
      text: "North Indian stuffed flatbread with spiced mashed potatoes.",
      image: "/images/aloo-paratha.png",
      type: "breakfast",
    },
    {
      name: "POHA",
      price: 30,
      text: "Flattened rice cooked with mustard seeds, curry leaves, and veggies.",
      image: "/images/poha.png",
      type: "breakfast",
    },
    {
      name: "PALAK PANEER",
      price: 110,
      text: "Spinach-based curry with soft paneer cubes and Indian spices.",
      image: "/images/palak-paneer.png",
      type: "dinner",
    },
    {
      name: "RAJMA CHAWAL",
      price: 80,
      text: "Kidney beans curry served with steamed rice, a North Indian favorite.",
      image: "/images/rajma-chawal.png",
      type: "lunch",
    },
    {
      name: "VEG MANCHURIAN",
      price: 100,
      text: "Crispy veggie balls tossed in a tangy Indo-Chinese sauce.",
      image: "/images/veg-manchurian.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
