import s11Blue from "../assets/img/summer/S1.1-blue.png";
import s12Blue from "../assets/img/summer/S1.2-blue.png";
import s13Blue from "../assets/img/summer/S1.3-blue.png";
import s14Khaki from "../assets/img/summer/S1.4-khaki.png";
import s15Burgundy from "../assets/img/summer/S1.5-burgundy.png";
import s16Green from "../assets/img/summer/S1.6-green.png";

import s21Green from "../assets/img/summer/S2.1-green.png";
import s22Green from "../assets/img/summer/S2.2-green.png";
import s23Green from "../assets/img/summer/S2.3-green.png";
import s24Yellow from "../assets/img/summer/S2.4-yellow.png";
import s25White from "../assets/img/summer/S2.5-white.png";
import s26LightBlue from "../assets/img/summer/S2.6-lightblue.png";

import s31Yellow from "../assets/img/summer/S3.1-yellow.png";
import s32Yellow from "../assets/img/summer/S3.2-yellow.png";
import s33Red from "../assets/img/summer/S3.3-red.png";
import s34Blue from "../assets/img/summer/S3.4-blue.png";

import s41BabyBlue from "../assets/img/summer/S4.1-babyblue.png";
import s42BabyBlue from "../assets/img/summer/S4.2-babyblue.png";
import s43Yellow from "../assets/img/summer/S4.3-yellow.png";
import s44Black from "../assets/img/summer/S4.4-black.png";

import s51ArmyGreen from "../assets/img/summer/S5.1-armygreen.png";
import s52ArmyGreen from "../assets/img/summer/S5.2-armygreen.png";
import s53White from "../assets/img/summer/S5.3-white.png";

import s61 from "../assets/img/summer/S6.1.png";
import s62 from "../assets/img/summer/S6.2.png";
import s63 from "../assets/img/summer/S6.3.png";

import s71 from "../assets/img/summer/S7.1.png";
import s72 from "../assets/img/summer/S7.2.png";

import s81Apricot from "../assets/img/summer/S8.1-apricot.png";
import s82Apricot from "../assets/img/summer/S8.2-apricot.png";
import s83White from "../assets/img/summer/S8.3-white.png";
import s84Green from "../assets/img/summer/S8.4-green.png";

export const summerProducts = [
  {
    id: "summer-1",
    name: "Breezy Button Summer Dress",
    price: "$72.00",
    category: "Dress",
    image: s11Blue,
    images: [s11Blue, s12Blue, s13Blue, s14Khaki, s15Burgundy, s16Green],
    colors: [
      { name: "Blue", hex: "#9aa9b7", image: s11Blue },
      { name: "Khaki", hex: "#b7a58b", image: s14Khaki },
      { name: "Burgundy", hex: "#6f1d2b", image: s15Burgundy },
      { name: "Green", hex: "#5f7459", image: s16Green },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A soft summer dress with an effortless silhouette, made for warm days and relaxed elegance.",
  },
  {
    id: "summer-2",
    name: "Soft Flowy Midi Dress",
    price: "$68.00",
    category: "Dress",
    image: s21Green,
    images: [s21Green, s22Green, s23Green, s24Yellow, s25White, s26LightBlue],
    colors: [
      { name: "Green", hex: "#6d7d5e", image: s21Green },
      { name: "Yellow", hex: "#e6c95f", image: s24Yellow },
      { name: "White", hex: "#f5f0e8", image: s25White },
      { name: "Light Blue", hex: "#a9c6d9", image: s26LightBlue },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A feminine midi dress with a light, airy feel that is perfect for summer outings.",
  },
  {
    id: "summer-3",
    name: "Summer Button Front Dress",
    price: "$74.00",
    category: "Dress",
    image: s31Yellow,
    images: [s31Yellow, s32Yellow, s33Red, s34Blue],
    colors: [
      { name: "Yellow", hex: "#d9b84f", image: s31Yellow },
      { name: "Red", hex: "#9b2d27", image: s33Red },
      { name: "Blue", hex: "#5f7f9f", image: s34Blue },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A classic button-front summer dress with a fresh shape and comfortable fit.",
  },
  {
    id: "summer-4",
    name: "Relaxed Summer Co-Ord Set",
    price: "$86.00",
    category: "Set",
    image: s41BabyBlue,
    images: [s41BabyBlue, s42BabyBlue, s43Yellow, s44Black],
    colors: [
      { name: "Baby Blue", hex: "#a9c9d8", image: s41BabyBlue },
      { name: "Yellow", hex: "#dfc35d", image: s43Yellow },
      { name: "Black", hex: "#111111", image: s44Black },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A relaxed matching set designed for a clean summer look with easy styling.",
  },
  {
    id: "summer-5",
    name: "Utility Inspired Summer Romper",
    price: "$79.00",
    category: "Romper",
    image: s51ArmyGreen,
    images: [s51ArmyGreen, s52ArmyGreen, s53White],
    colors: [
      { name: "Army Green", hex: "#4f5c43", image: s51ArmyGreen },
      { name: "White", hex: "#f5f0e8", image: s53White },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A structured yet comfortable romper with a soft utility-inspired summer feel.",
  },
  {
    id: "summer-6",
    name: "Cream Wrap Summer Set",
    price: "$92.00",
    category: "Set",
    image: s61,
    images: [s61, s62, s63],
    colors: [
      { name: "Cream", hex: "#e8ddcc", image: s61 },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A polished cream set with a soft wrap detail for a timeless warm-weather outfit.",
  },
  {
    id: "summer-7",
    name: "Printed Resort Dress",
    price: "$66.00",
    category: "Dress",
    image: s71,
    images: [s71, s72],
    colors: [
      { name: "Printed", hex: "#d8c7bd", image: s71 },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A light printed dress made for resort days, summer plans, and relaxed weekends.",
  },
  {
    id: "summer-8",
    name: "Linen Summer Top",
    price: "$54.00",
    category: "Top",
    image: s81Apricot,
    images: [s81Apricot, s82Apricot, s83White, s84Green],
    colors: [
      { name: "Apricot", hex: "#d7ad8b", image: s81Apricot },
      { name: "White", hex: "#f5f0e8", image: s83White },
      { name: "Green", hex: "#6d7a5d", image: s84Green },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A simple linen-inspired summer top designed for effortless everyday styling.",
  },
];