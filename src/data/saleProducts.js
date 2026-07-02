import { summerProducts } from "./summerProducts";
import { dressProducts } from "./dressProducts";
import { topProducts } from "./topProducts";
import { bottomProducts } from "./bottomProducts";
import { accessoriesProducts } from "./accessoriesProducts";

const getProductById = (products, id) => {
  return products.find((product) => product.id === id);
};

const applyDiscount = (product, discountPercent, saleCategory) => {
  const originalPriceNumber = Number(product.price.replace("$", ""));
  const salePriceNumber =
    originalPriceNumber - originalPriceNumber * (discountPercent / 100);

  return {
    ...product,
    id: `sale-${product.id}`,
    saleCategory,
    originalPrice: product.price,
    price: `$${salePriceNumber.toFixed(2)}`,
    discountPercent,
    discountLabel: `${discountPercent}% OFF`,
    description: `${product.description} Now available for a limited-time ${discountPercent}% discount.`,
  };
};

export const saleProducts = [
  applyDiscount(
    getProductById(dressProducts, "dress-4"),
    30,
    "Dresses"
  ),
  applyDiscount(
    getProductById(topProducts, "top-3"),
    25,
    "Tops"
  ),
  applyDiscount(
    getProductById(bottomProducts, "bottom-4"),
    20,
    "Bottoms"
  ),
  applyDiscount(
    getProductById(bottomProducts, "bottom-8"),
    25,
    "Bottoms"
  ),
  applyDiscount(
    getProductById(accessoriesProducts, "accessory-1"),
    30,
    "Accessories"
  ),
  applyDiscount(
    getProductById(summerProducts, "summer-6"),
    20,
    "Summer"
  ),
];