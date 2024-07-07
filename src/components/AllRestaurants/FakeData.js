import res1 from "../../assets/elmaqam.png";
import res2 from "../../assets/bakiza.jpg";
import res3 from "../../assets/stone.png";
import res4 from "../../assets/baiti.jpg";
import res5 from "../../assets/aseel.png";
import res6 from "../../assets/malh.jpg";
import res7 from "../../assets/atasha.jpg";
import res8 from "../../assets/bab.png";
import dish1 from "../../assets/Margherita Pizza.jpg";
import dish2 from "../../assets/Serious burger offer.jpg";
import dish3 from "../../assets/Chicken pane dish.jpg";
import dish4 from "../../assets/Potato packet.jpg";
import userImg from "../../assets/customer.jpg";
export const RESTAURANTS = [
  {
    id: 1,
    name: "EL maqam",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res1,
    bestDishes: [
      { DishName: "Margherita Pizza", img: dish1 },
      { DishName: "Serious burger offer", img: dish2 },
      { DishName: "Chicken pane dish", img: dish3 },
      { DishName: "Potato packet", img: dish4 },
    ],
    Reviews: [
      {
        user: "Hassan",
        userImg: userImg,
        comment: "Amazing",
        createdAt: "Today",
      },
      {
        user: "Hassan",
        userImg: userImg,
        comment: "Amazing",
        createdAt: "Today",
      },
      {
        user: "Hassan",
        userImg: userImg,
        comment: "Amazing",
        createdAt: "Today",
      },
    ],
  },
  {
    id: 2,
    name: "Bakiza",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res2,
  },
  {
    id: 3,
    name: "Stone Yard",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res3,
  },
  {
    id: 4,
    name: "Akl Baty",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res4,
  },
  {
    id: 5,
    name: "El Aseel",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res5,
  },
  {
    id: 6,
    name: "Aish & Malh",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res6,
  },
  {
    id: 7,
    name: "Al Tasaa",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res7,
  },
  {
    id: 8,
    name: "Bab Sharqy",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res8,
  },
  {
    id: 9,
    name: "Bab Sharqy",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res8,
  },
  {
    id: 10,
    name: "Bab Sharqy",
    food: ["Pizza", "Pasta", "Pastries"],
    image: res8,
  },
];
