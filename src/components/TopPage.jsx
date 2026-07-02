import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { topProducts } from "../data/topProducts";

import topHero from "../assets/img/top/top-Hero.png";

import "./TopPage.css";

const TopPage = () => {
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

  const filters = ["All", "Sleeveless", "Blouses"];

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
      ? topProducts
      : topProducts.filter(
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
          <div className="top-favorite-popup">
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
        <div className="top-favorite-popup">
          <span>♥</span>
          <span>{favoriteMessage}</span>
        </div>
      )}

      <section className="top-page">
        <section
          className="top-hero"
          style={{
            backgroundImage: `url(${topHero})`,
          }}
        >
          <div className="top-hero-content">
            <p className="top-hero-eyebrow">
              Soft layers. Polished details.
            </p>

            <h1 className="top-hero-title">
              Top
              <br />
              Collection
            </h1>

            <p className="top-hero-description">
              Elegant tops made for effortless styling, soft layering,
              and everyday confidence.
            </p>
          </div>
        </section>

        <div className="top-toolbar">
          <div className="top-filter-buttons">
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
            className="top-sort"
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

        <div className="top-grid">
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

export default TopPage;