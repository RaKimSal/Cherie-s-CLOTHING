import b11Blue from "../assets/img/bottom/B1.1-blue.png";
import b12Blue from "../assets/img/bottom/B1.2-blue.png";
import b13Blue from "../assets/img/bottom/B1.3-blue.png";

import b21Apricot from "../assets/img/bottom/B2.1-apricot.png";
import b22Apricot from "../assets/img/bottom/B2.2-apricot.png";
import b23Apricot from "../assets/img/bottom/B2.3-apricot.png";
import b24Grey from "../assets/img/bottom/B2.4-grey.png";

import b31Grey from "../assets/img/bottom/B3.1-grey.png";
import b32Grey from "../assets/img/bottom/B3.2-grey.png";
import b33Grey from "../assets/img/bottom/B3.3-grey.png";
import b34MintGreen from "../assets/img/bottom/B3.4-mintgreen.png";
import b35Camel from "../assets/img/bottom/B3.5-camel.png";
import b36NavyBlue from "../assets/img/bottom/B3.6-navyblue.png";

import b41Apricot from "../assets/img/bottom/B4.1-apricot.png";
import b42Apricot from "../assets/img/bottom/B4.2-apricot.png";
import b43Apricot from "../assets/img/bottom/B4.3-apricot.png";
import b44Black from "../assets/img/bottom/B4.4-black.png";
import b45Burgundy from "../assets/img/bottom/B4.5-burgundy.png";

import b51ChocolateBrown from "../assets/img/bottom/B5.1-chocolatebrown.png";
import b52Khaki from "../assets/img/bottom/B5.2-khaki.png";
import b53Black from "../assets/img/bottom/B5.3-black.png";
import b54Black from "../assets/img/bottom/B5.4-black.png";
import b55ChocolateBrown from "../assets/img/bottom/B5.5-chocolatebrown.png";

import b61Black from "../assets/img/bottom/B6.1-black.png";
import b62Khaki from "../assets/img/bottom/B6.2-khaki.png";
import b63White from "../assets/img/bottom/B6.3-white.png";

import b71Black from "../assets/img/bottom/B7.1-black.png";
import b72Black from "../assets/img/bottom/B7.2-black.png";
import b73Black from "../assets/img/bottom/B7.3-black.png";
import b74Apricot from "../assets/img/bottom/B7.4-apricot.png";

import b81Brown from "../assets/img/bottom/B8.1-brown.png";
import b82Black from "../assets/img/bottom/B8.2-black.png";
import b83White from "../assets/img/bottom/B8.3-white.png";
import b84Grey from "../assets/img/bottom/B8.4-grey.png";

import b91Apricot from "../assets/img/bottom/B9.1-apricot.png";
import b92Apricot from "../assets/img/bottom/B9.2-apricot.png";
import b93Black from "../assets/img/bottom/B9.3-black.png";
import b94White from "../assets/img/bottom/B9.4-white.png";
import b95Grey from "../assets/img/bottom/B9.5-grey.png";

import b101Beige from "../assets/img/bottom/B10.1-beige.png";
import b102Beige from "../assets/img/bottom/B10.2-beige.png";
import b103Black from "../assets/img/bottom/B10.3-black.png";
import b104 from "../assets/img/bottom/B10.4.png";

export const bottomProducts = [
  {
    id: "bottom-1",
    name: "Navy Wide Leg Trousers",
    price: "$74.00",
    category: "Pants",
    image: b11Blue,
    images: [b11Blue, b12Blue, b13Blue],
    colors: [
      { name: "Blue", hex: "#253653", image: b11Blue },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Elegant wide leg trousers with a polished navy tone, perfect for office looks and refined everyday styling.",
  },
  {
    id: "bottom-2",
    name: "Apricot Pleated Wide Pants",
    price: "$78.00",
    category: "Pants",
    image: b21Apricot,
    images: [b21Apricot, b22Apricot, b23Apricot, b24Grey],
    colors: [
      { name: "Apricot", hex: "#d8c0a5", image: b21Apricot },
      { name: "Grey", hex: "#b8b8b8", image: b24Grey },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Soft pleated wide pants with an airy silhouette, designed for effortless elegance and comfort.",
  },
  {
    id: "bottom-3",
    name: "Relaxed Straight Leg Pants",
    price: "$69.00",
    category: "Pants",
    image: b31Grey,
    images: [
      b31Grey,
      b32Grey,
      b33Grey,
      b34MintGreen,
      b35Camel,
      b36NavyBlue,
    ],
    colors: [
      { name: "Grey", hex: "#8f8f8f", image: b31Grey },
      { name: "Mint Green", hex: "#9aa98f", image: b34MintGreen },
      { name: "Camel", hex: "#b3895d", image: b35Camel },
      { name: "Navy Blue", hex: "#253653", image: b36NavyBlue },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Relaxed straight leg pants made for casual chic outfits with a clean and comfortable fit.",
  },
  {
    id: "bottom-4",
    name: "Flowy Maxi Skirt",
    price: "$82.00",
    category: "Skirts",
    image: b41Apricot,
    images: [b41Apricot, b42Apricot, b43Apricot, b44Black, b45Burgundy],
    colors: [
      { name: "Apricot", hex: "#d8c0a5", image: b41Apricot },
      { name: "Black", hex: "#111111", image: b44Black },
      { name: "Burgundy", hex: "#6b1f2a", image: b45Burgundy },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A romantic flowy maxi skirt with soft movement, perfect for feminine styling and special moments.",
  },
  {
    id: "bottom-5",
    name: "Fitted Mini Skirt",
    price: "$58.00",
    category: "Skirts",
    image: b51ChocolateBrown,
    images: [
      b51ChocolateBrown,
      b52Khaki,
      b53Black,
      b54Black,
      b55ChocolateBrown,
    ],
    colors: [
      { name: "Chocolate Brown", hex: "#6b4636", image: b51ChocolateBrown },
      { name: "Khaki", hex: "#b6a58d", image: b52Khaki },
      { name: "Black", hex: "#111111", image: b53Black },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A fitted mini skirt with a sleek shape, easy to style with boots, blouses, or simple basics.",
  },
  {
    id: "bottom-6",
    name: "Soft Tulle Midi Skirt",
    price: "$76.00",
    category: "Skirts",
    image: b61Black,
    images: [b61Black, b62Khaki, b63White],
    colors: [
      { name: "Black", hex: "#111111", image: b61Black },
      { name: "Khaki", hex: "#b6a58d", image: b62Khaki },
      { name: "White", hex: "#f5f0e8", image: b63White },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A soft midi skirt with a delicate flow, made for romantic and elegant outfits.",
  },
  {
    id: "bottom-7",
    name: "Classic Black Mini Skirt",
    price: "$62.00",
    category: "Skirts",
    image: b71Black,
    images: [b71Black, b72Black, b73Black, b74Apricot],
    colors: [
      { name: "Black", hex: "#111111", image: b71Black },
      { name: "Apricot", hex: "#d8c0a5", image: b74Apricot },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A classic mini skirt with a polished shape, perfect for chic everyday outfits.",
  },
  {
    id: "bottom-8",
    name: "Belted Tailored Shorts",
    price: "$54.00",
    category: "Shorts",
    image: b81Brown,
    images: [b81Brown, b82Black, b83White, b84Grey],
    colors: [
      { name: "Brown", hex: "#8b6a55", image: b81Brown },
      { name: "Black", hex: "#111111", image: b82Black },
      { name: "White", hex: "#f5f0e8", image: b83White },
      { name: "Grey", hex: "#a7a7a7", image: b84Grey },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Tailored shorts with a belted detail, designed for a neat and feminine warm-weather look.",
  },
  {
    id: "bottom-9",
    name: "High Waist Casual Shorts",
    price: "$49.00",
    category: "Shorts",
    image: b91Apricot,
    images: [b91Apricot, b92Apricot, b93Black, b94White, b95Grey],
    colors: [
      { name: "Apricot", hex: "#d8c0a5", image: b91Apricot },
      { name: "Black", hex: "#111111", image: b93Black },
      { name: "White", hex: "#f5f0e8", image: b94White },
      { name: "Grey", hex: "#a7a7a7", image: b95Grey },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Simple high waist shorts with a clean tailored look for casual summer styling.",
  },
  {
    id: "bottom-10",
    name: "Elegant Belted Shorts",
    price: "$56.00",
    category: "Shorts",
    image: b101Beige,
    images: [b101Beige, b102Beige, b103Black, b104],
    colors: [
      { name: "Beige", hex: "#d8c0a5", image: b101Beige },
      { name: "Black", hex: "#111111", image: b103Black },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Elegant belted shorts with a polished shape, perfect for pairing with soft blouses and sandals.",
  },
];