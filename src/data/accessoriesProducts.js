import bag11White from "../assets/img/accessories/Bag1.1-white.png";
import bag12White from "../assets/img/accessories/Bag1.2-white.png";
import bag13White from "../assets/img/accessories/Bag1.3-white.png";
import bag14Black from "../assets/img/accessories/Bag1.4-black.png";

import bag21Brown from "../assets/img/accessories/Bag2.1-brown.png";
import bag22Black from "../assets/img/accessories/Bag2.2-black.png";

import bag31White from "../assets/img/accessories/Bag3.1-white.png";
import bag32White from "../assets/img/accessories/Bag3.2-white.png";

import bag41Black from "../assets/img/accessories/Bag4.1-black.png";
import bag42Black from "../assets/img/accessories/Bag4.2-black.png";
import bag43Black from "../assets/img/accessories/Bag4.3-black.png";

import bag51White from "../assets/img/accessories/Bag5.1-white.png";
import bag52White from "../assets/img/accessories/Bag5.2-white.png";
import bag53White from "../assets/img/accessories/Bag5.3-white.png";
import bag54Black from "../assets/img/accessories/Bag5.4-black.png";
import bag55Orange from "../assets/img/accessories/Bag5.5-orange.png";
import bag56Brown from "../assets/img/accessories/Bag5.6-brown.png";

import belt11Black from "../assets/img/accessories/Belt1.1-black.png";
import belt12White from "../assets/img/accessories/Belt1.2-white.png";
import belt13Black from "../assets/img/accessories/Belt1.3-black.png";
import belt14Brown from "../assets/img/accessories/Belt1.4-brown.png";

import belt21Brown from "../assets/img/accessories/Belt2.1-brown.png";
import belt22Brown from "../assets/img/accessories/Belt2.2-brown.png";
import belt23Brown from "../assets/img/accessories/Belt2.3-brown.png";
import belt24Brown from "../assets/img/accessories/Belt2.4-brown.png";

import glasses11 from "../assets/img/accessories/Glasses1.1.png";
import glasses12 from "../assets/img/accessories/Glasses1.2.png";
import glasses13 from "../assets/img/accessories/Glasses1.3.png";

import glasses21 from "../assets/img/accessories/Glasses2.1.png";
import glasses22 from "../assets/img/accessories/Glasses2.2.png";
import glasses23 from "../assets/img/accessories/Glasses2.3.png";
import glasses24 from "../assets/img/accessories/Glasses2.4.png";

import glasses41Brown from "../assets/img/accessories/Glasses4.1-brown.png";
import glasses42Brown from "../assets/img/accessories/Glasses4.2-brown.png";
import glasses43Black from "../assets/img/accessories/Glasses4.3-black.png";

import hat11Black from "../assets/img/accessories/Hat1.1-black.png";
import hat12Brown from "../assets/img/accessories/Hat1.2-brown.png";
import hat13White from "../assets/img/accessories/Hat1.3-white.png";

import hat21 from "../assets/img/accessories/Hat2.1.png";
import hat22 from "../assets/img/accessories/Hat2.2.png";
import hat23 from "../assets/img/accessories/Hat2.3.png";
import hat24 from "../assets/img/accessories/Hat2.4.png";

import hat31Apricot from "../assets/img/accessories/Hat3.1-apricot.png";
import hat32Apricot from "../assets/img/accessories/Hat3.2-apricot.png";
import hat33Apricot from "../assets/img/accessories/Hat3.3-apricot.png";
import hat34Burgundy from "../assets/img/accessories/Hat3.4-burgundy.png";

import jewelry11 from "../assets/img/accessories/Jewelry1.1.png";
import jewelry12 from "../assets/img/accessories/Jewelry1.2.png";
import jewelry13 from "../assets/img/accessories/Jewelry1.3.png";

import jewelry21 from "../assets/img/accessories/Jewelry2.1.png";
import jewelry22 from "../assets/img/accessories/Jewelry2.2.png";
import jewelry23 from "../assets/img/accessories/Jewelry2.3.png";

import jewelry31 from "../assets/img/accessories/Jewelry3.1.png";
import jewelry32 from "../assets/img/accessories/Jewelry3.2.png";
import jewelry33 from "../assets/img/accessories/Jewelry3.3.png";
import jewelry35 from "../assets/img/accessories/Jewelry3.5.png";

import scarf11BlackWhite from "../assets/img/accessories/Scarf1.1-black&white.png";
import scarf12BlackWhite from "../assets/img/accessories/Scarf1.2-black&white.png";
import scarf13BlackWhite from "../assets/img/accessories/Scarf1.3-black&white.png";

import scarf21NavyBlue from "../assets/img/accessories/Scarf2.1-navyblue.png";
import scarf22NavyBlue from "../assets/img/accessories/Scarf2.2-navyblue.png";
import scarf23Taupe from "../assets/img/accessories/Scarf2.3-taupe.png";

import scarf31 from "../assets/img/accessories/Scarf3.1.png";
import scarf32 from "../assets/img/accessories/Scarf3.2.png";
import scarf33 from "../assets/img/accessories/Scarf3.3.png";
import scarf34 from "../assets/img/accessories/Scarf3.4.png";

export const accessoriesProducts = [
  {
    id: "accessory-1",
    name: "Structured White Handbag",
    price: "$68.00",
    category: "Bags",
    image: bag11White,
    images: [bag11White, bag12White, bag13White, bag14Black],
    colors: [
      { name: "White", hex: "#f5f0e8", image: bag11White },
      { name: "Black", hex: "#111111", image: bag14Black },
    ],
    sizes: ["One Size"],
    description:
      "A structured handbag with a polished shape, perfect for elegant everyday outfits.",
  },
  {
    id: "accessory-2",
    name: "Classic Tote Bag",
    price: "$72.00",
    category: "Bags",
    image: bag21Brown,
    images: [bag21Brown, bag22Black],
    colors: [
      { name: "Brown", hex: "#a7643f", image: bag21Brown },
      { name: "Black", hex: "#111111", image: bag22Black },
    ],
    sizes: ["One Size"],
    description:
      "A classic tote bag designed for daily use with a clean and timeless finish.",
  },
  {
    id: "accessory-3",
    name: "Elegant White Shoulder Bag",
    price: "$64.00",
    category: "Bags",
    image: bag31White,
    images: [bag31White, bag32White],
    colors: [{ name: "White", hex: "#f5f0e8", image: bag31White }],
    sizes: ["One Size"],
    description:
      "A soft white shoulder bag with refined details for feminine styling.",
  },
  {
    id: "accessory-4",
    name: "Black Textured Handbag",
    price: "$76.00",
    category: "Bags",
    image: bag41Black,
    images: [bag41Black, bag42Black, bag43Black],
    colors: [{ name: "Black", hex: "#111111", image: bag41Black }],
    sizes: ["One Size"],
    description:
      "A textured black handbag with a sophisticated finish and spacious interior.",
  },
  {
    id: "accessory-5",
    name: "Silk Scarf Handle Bag",
    price: "$70.00",
    category: "Bags",
    image: bag51White,
    images: [bag51White, bag52White, bag53White, bag54Black, bag55Orange, bag56Brown],
    colors: [
      { name: "White", hex: "#f5f0e8", image: bag51White },
      { name: "Black", hex: "#111111", image: bag54Black },
      { name: "Orange", hex: "#c86b32", image: bag55Orange },
      { name: "Brown", hex: "#7a4b35", image: bag56Brown },
    ],
    sizes: ["One Size"],
    description:
      "A charming handbag with a scarf handle detail for a soft, elegant accent.",
  },
  {
    id: "accessory-6",
    name: "Classic Buckle Belt",
    price: "$32.00",
    category: "Belts",
    image: belt11Black,
    images: [belt11Black, belt12White, belt13Black, belt14Brown],
    colors: [
      { name: "Black", hex: "#111111", image: belt11Black },
      { name: "White", hex: "#f5f0e8", image: belt12White },
      { name: "Brown", hex: "#7a4b35", image: belt14Brown },
    ],
    sizes: ["One Size"],
    description:
      "A classic buckle belt made to complete trousers, skirts, and tailored outfits.",
  },
  {
    id: "accessory-7",
    name: "Slim Gold Buckle Belt",
    price: "$28.00",
    category: "Belts",
    image: belt21Brown,
    images: [belt21Brown, belt22Brown, belt23Brown, belt24Brown],
    colors: [{ name: "Brown", hex: "#6d4a36", image: belt21Brown }],
    sizes: ["One Size"],
    description:
      "A slim belt with a gold buckle detail for a clean and polished waist accent.",
  },
  {
    id: "accessory-8",
    name: "Minimal Oval Sunglasses",
    price: "$34.00",
    category: "Glasses",
    image: glasses11,
    images: [glasses11, glasses12, glasses13],
    colors: [{ name: "Gold", hex: "#d6b56d", image: glasses11 }],
    sizes: ["One Size"],
    description:
      "Minimal oval sunglasses with a soft feminine look for sunny days.",
  },
  {
    id: "accessory-9",
    name: "Square Frame Sunglasses",
    price: "$36.00",
    category: "Glasses",
    image: glasses21,
    images: [glasses21, glasses22, glasses23, glasses24],
    colors: [{ name: "Black", hex: "#111111", image: glasses21 }],
    sizes: ["One Size"],
    description:
      "A modern square-frame style that adds a polished finish to any outfit.",
  },
  {
    id: "accessory-10",
    name: "Brown Round Sunglasses",
    price: "$35.00",
    category: "Glasses",
    image: glasses41Brown,
    images: [glasses41Brown, glasses42Brown, glasses43Black],
    colors: [
      { name: "Brown", hex: "#7a4b35", image: glasses41Brown },
      { name: "Black", hex: "#111111", image: glasses43Black },
    ],
    sizes: ["One Size"],
    description:
      "Round sunglasses with a soft vintage feel and effortless summer charm.",
  },
  {
    id: "accessory-11",
    name: "Wide Brim Summer Hat",
    price: "$42.00",
    category: "Hats",
    image: hat11Black,
    images: [hat11Black, hat12Brown, hat13White],
    colors: [
      { name: "Black", hex: "#111111", image: hat11Black },
      { name: "Brown", hex: "#9b6f4d", image: hat12Brown },
      { name: "White", hex: "#f5f0e8", image: hat13White },
    ],
    sizes: ["One Size"],
    description:
      "A wide brim hat designed for soft summer styling and elegant sun protection.",
  },
  {
    id: "accessory-12",
    name: "Ribbon Straw Hat",
    price: "$39.00",
    category: "Hats",
    image: hat21,
    images: [hat21, hat22, hat23, hat24],
    colors: [{ name: "Natural", hex: "#d9c6a5", image: hat21 }],
    sizes: ["One Size"],
    description:
      "A straw hat with ribbon detail, perfect for beach days and relaxed warm-weather outfits.",
  },
  {
    id: "accessory-13",
    name: "Casual Baseball Cap",
    price: "$29.00",
    category: "Hats",
    image: hat31Apricot,
    images: [hat31Apricot, hat32Apricot, hat33Apricot, hat34Burgundy],
    colors: [
      { name: "Apricot", hex: "#d7ad8b", image: hat31Apricot },
      { name: "Burgundy", hex: "#6b1f2a", image: hat34Burgundy },
    ],
    sizes: ["One Size"],
    description:
      "A casual cap with a clean finish, made for simple everyday styling.",
  },
  {
    id: "accessory-14",
    name: "Layered Gold Necklace",
    price: "$45.00",
    category: "Jewelry",
    image: jewelry11,
    images: [jewelry11, jewelry12, jewelry13],
    colors: [{ name: "Gold", hex: "#d6b56d", image: jewelry11 }],
    sizes: ["One Size"],
    description:
      "A layered gold necklace that adds a delicate and feminine finish.",
  },
  {
    id: "accessory-15",
    name: "Minimal Gold Chain",
    price: "$38.00",
    category: "Jewelry",
    image: jewelry21,
    images: [jewelry21, jewelry22, jewelry23],
    colors: [{ name: "Gold", hex: "#d6b56d", image: jewelry21 }],
    sizes: ["One Size"],
    description:
      "A minimal gold chain necklace made for subtle everyday elegance.",
  },
  {
    id: "accessory-16",
    name: "Dainty Gold Necklace",
    price: "$40.00",
    category: "Jewelry",
    image: jewelry31,
    images: [jewelry31, jewelry32, jewelry33, jewelry35],
    colors: [{ name: "Gold", hex: "#d6b56d", image: jewelry31 }],
    sizes: ["One Size"],
    description:
      "A dainty necklace with a soft gold finish for a timeless accessory look.",
  },
  {
    id: "accessory-17",
    name: "Black and White Silk Scarf",
    price: "$34.00",
    category: "Scarves",
    image: scarf11BlackWhite,
    images: [scarf11BlackWhite, scarf12BlackWhite, scarf13BlackWhite],
    colors: [{ name: "Black & White", hex: "#2f211d", image: scarf11BlackWhite }],
    sizes: ["One Size"],
    description:
      "A silk scarf with a classic black and white pattern for an elegant finishing touch.",
  },
  {
    id: "accessory-18",
    name: "Navy Printed Scarf",
    price: "$36.00",
    category: "Scarves",
    image: scarf21NavyBlue,
    images: [scarf21NavyBlue, scarf22NavyBlue, scarf23Taupe],
    colors: [
      { name: "Navy Blue", hex: "#253653", image: scarf21NavyBlue },
      { name: "Taupe", hex: "#b6a58d", image: scarf23Taupe },
    ],
    sizes: ["One Size"],
    description:
      "A printed scarf in soft tones, perfect for styling around the neck, bag, or hair.",
  },
  {
    id: "accessory-19",
    name: "Colorful Square Scarf",
    price: "$37.00",
    category: "Scarves",
    image: scarf31,
    images: [scarf31, scarf32, scarf33, scarf34],
    colors: [{ name: "Multicolor", hex: "#c78b72", image: scarf31 }],
    sizes: ["One Size"],
    description:
      "A colorful square scarf that adds a playful but elegant detail to simple outfits.",
  },
];