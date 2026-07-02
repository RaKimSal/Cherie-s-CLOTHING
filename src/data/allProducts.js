import { summerProducts } from "./summerProducts";
import { dressProducts } from "./dressProducts";
import { topProducts } from "./topProducts";
import { bottomProducts } from "./bottomProducts";
import { accessoriesProducts } from "./accessoriesProducts";

export const allProducts = [
  ...summerProducts.map((product) => ({
    ...product,
    mainCategory: "Summer",
  })),

  ...dressProducts.map((product) => ({
    ...product,
    mainCategory: "Dresses",
  })),

  ...topProducts.map((product) => ({
    ...product,
    mainCategory: "Tops",
  })),

  ...bottomProducts.map((product) => ({
    ...product,
    mainCategory: "Bottoms",
  })),

  ...accessoriesProducts.map((product) => ({
    ...product,
    mainCategory: "Accessories",
  })),
];