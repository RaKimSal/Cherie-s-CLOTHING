import d11Khaki from "../assets/img/dress/D1.1-khaki.png";
import d12Khaki from "../assets/img/dress/D1.2-khaki.png";
import d13Beige from "../assets/img/dress/D1.3-beige.png";
import d14Burgundy from "../assets/img/dress/D1.4-burgundy.png";
import d15Black from "../assets/img/dress/D1.5-black.png";

import d21White from "../assets/img/dress/D2.1-white.png";
import d22Black from "../assets/img/dress/D2.2-black.png";
import d23Green from "../assets/img/dress/D2.3-green.png";

import d31Beige from "../assets/img/dress/D3.1-beige.png";
import d32Beige from "../assets/img/dress/D3.2-beige.png";
import d33Beige from "../assets/img/dress/D3.3-beige.png";

import d41Milky from "../assets/img/dress/D4.1-milky.png";
import d42Milky from "../assets/img/dress/D4.2-milky.png";
import d43Milky from "../assets/img/dress/D4.3-milky.png";

import d51Blue from "../assets/img/dress/D5.1-blue.png";
import d52Blue from "../assets/img/dress/D5.2-blue.png";
import d53Blue from "../assets/img/dress/D5.3-blue.png";

import d61Paprika from "../assets/img/dress/D6.1-paprika.png";
import d62Paprika from "../assets/img/dress/D6.2-paprika.png";
import d63Paprika from "../assets/img/dress/D6.3-paprika.png";

import d71Apricot from "../assets/img/dress/D7.1-apricot.png";
import d72Apricot from "../assets/img/dress/D7.2-apricot.png";
import d73Apricot from "../assets/img/dress/D7.3-apricot.png";
import d74Black from "../assets/img/dress/D7.4-black.png";
import d75Black from "../assets/img/dress/D7.5-black.png";
import d76Pink from "../assets/img/dress/D7.6-pink.png";

import d81White from "../assets/img/dress/D8.1-white.png";
import d82Beige from "../assets/img/dress/D8.2-beige.png";
import d83Black from "../assets/img/dress/D8.3-black.png";

export const dressProducts = [
  {
    id: "dress-1",
    name: "Elegant Ruched Midi Dress",
    price: "$88.00",
    category: "Midi",
    image: d11Khaki,
    images: [d11Khaki, d12Khaki, d13Beige, d14Burgundy, d15Black],
    colors: [
      { name: "Khaki", hex: "#b6a58d", image: d11Khaki },
      { name: "Beige", hex: "#d8c3ad", image: d13Beige },
      { name: "Burgundy", hex: "#6b1f2a", image: d14Burgundy },
      { name: "Black", hex: "#111111", image: d15Black },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A fitted midi dress with soft ruching and an elegant shape for timeless occasions.",
  },
  {
    id: "dress-2",
    name: "Classic Sleeveless Dress",
    price: "$82.00",
    category: "Mini",
    image: d21White,
    images: [d21White, d22Black, d23Green],
    colors: [
      { name: "White", hex: "#f5f0e8", image: d21White },
      { name: "Black", hex: "#111111", image: d22Black },
      { name: "Green", hex: "#2f5c48", image: d23Green },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A clean sleeveless dress designed for an effortless feminine look.",
  },
  {
    id: "dress-3",
    name: "Soft Beige Day Dress",
    price: "$76.00",
    category: "Casual",
    image: d31Beige,
    images: [d31Beige, d32Beige, d33Beige],
    colors: [
      { name: "Beige", hex: "#d6c0a8", image: d31Beige },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A soft beige dress made for relaxed days, warm weather, and easy styling.",
  },
  {
    id: "dress-4",
    name: "Milky Satin Evening Dress",
    price: "$120.00",
    category: "Formal",
    image: d41Milky,
    images: [d41Milky, d42Milky, d43Milky],
    colors: [
      { name: "Milky", hex: "#e8dfd1", image: d41Milky },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A graceful evening dress with a soft milky tone and elegant flow.",
  },
  {
    id: "dress-5",
    name: "Blue Draped Occasion Dress",
    price: "$85.00",
    category: "Formal",
    image: d51Blue,
    images: [d51Blue, d52Blue, d53Blue],
    colors: [
      { name: "Blue", hex: "#4e6f8f", image: d51Blue },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A polished blue dress with a refined draped silhouette for special occasions.",
  },
  {
    id: "dress-6",
    name: "Paprika Fitted Dress",
    price: "$65.00",
    category: "Midi",
    image: d61Paprika,
    images: [d61Paprika, d62Paprika, d63Paprika],
    colors: [
      { name: "Paprika", hex: "#a65336", image: d61Paprika },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A warm paprika dress with a flattering fit and feminine finish.",
  },
  {
    id: "dress-7",
    name: "Romantic Tie Shoulder Dress",
    price: "$90.00",
    category: "Mini",
    image: d71Apricot,
    images: [d71Apricot, d72Apricot, d73Apricot, d74Black, d75Black, d76Pink],
    colors: [
      { name: "Apricot", hex: "#d7ad8b", image: d71Apricot },
      { name: "Black", hex: "#111111", image: d74Black },
      { name: "Pink", hex: "#e6b7ad", image: d76Pink },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A romantic dress with soft details, perfect for brunch, dates, and summer evenings.",
  },
  {
    id: "dress-8",
    name: "Minimal Wrap Dress",
    price: "$75.00",
    category: "Casual",
    image: d81White,
    images: [d81White, d82Beige, d83Black],
    colors: [
      { name: "White", hex: "#f5f0e8", image: d81White },
      { name: "Beige", hex: "#cdb89e", image: d82Beige },
      { name: "Black", hex: "#111111", image: d83Black },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A minimal wrap dress designed for simple elegance and everyday confidence.",
  },
];