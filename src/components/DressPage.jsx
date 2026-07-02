import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { dressProducts } from "../data/dressProducts";

import dressHero from "../assets/img/dress/dress-Hero.png";

import "./DressPage.css";

const DressPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");
  const [favoriteMessage, setFavoriteMessage] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("cheriesFavorites");

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];
  });

  const filters = ["All", "Mini", "Midi", "Casual", "Formal"];

  useEffect(() => {
    localStorage.setItem(
      "cheriesFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    if (!favoriteMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setFavoriteMessage("");
    }, 1800);

    return () => clearTimeout(timer);
  }, [favoriteMessage]);

  const isFavorite = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  const handleToggleFavorite = (product, event) => {
    if (event) {
      event.stopPropagation();
    }

    const alreadyFavorite = isFavorite(product.id);

    if (alreadyFavorite) {
      setFavorites((currentFavorites) =>
        currentFavorites.filter((item) => item.id !== product.id)
      );

      setFavoriteMessage("Removed from Favorites");
      return;
    }

    const favoriteItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor: product.colors[0].name,
      selectedSize: "Not selected yet",
    };

    setFavorites((currentFavorites) => [
      ...currentFavorites,
      favoriteItem,
    ]);

    setFavoriteMessage("Added to Favorites");
  };

  const getPriceNumber = (price) => {
    return Number(price.replace("$", ""));
  };

  const filteredProducts =
    activeFilter === "All"
      ? dressProducts
      : dressProducts.filter(
          (product) => product.category === activeFilter
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "LowToHigh") {
      return getPriceNumber(a.price) - getPriceNumber(b.price);
    }

    if (sortOption === "HighToLow") {
      return getPriceNumber(b.price) - getPriceNumber(a.price);
    }

    return 0;
  });

  if (selectedProduct) {
    return (
      <>
        {favoriteMessage && (
          <div className="dress-favorite-popup">
            <span>♥</span>
            <span>{favoriteMessage}</span>
          </div>
        )}

        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </>
    );
  }

  return (
    <>
      {favoriteMessage && (
        <div className="dress-favorite-popup">
          <span>♥</span>
          <span>{favoriteMessage}</span>
        </div>
      )}

      <section className="dress-page">
        <section
          className="dress-hero"
          style={{
            backgroundImage: `url(${dressHero})`,
          }}
        >
          <div className="dress-hero-content">
            <p className="dress-hero-eyebrow">
              Elegant pieces. Timeless moments.
            </p>

            <h1 className="dress-hero-title">
              Dress
              <br />
              Collection
            </h1>

            <p className="dress-hero-description">
              Feminine dresses made for everyday elegance,
              special occasions, and effortless confidence.
            </p>
          </div>
        </section>

        <div className="dress-toolbar">
          <div className="dress-filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter ? "active-filter" : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <select
            className="dress-sort"
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value)
            }
          >
            <option value="Newest">Newest Arrivals</option>
            <option value="LowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="dress-grid">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={setSelectedProduct}
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DressPage;