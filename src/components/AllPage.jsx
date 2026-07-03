import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";

import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails";
import { allProducts } from "../data/allProducts";

import allHero from "../assets/img/all-Hero.png";

import "./AllPage.css";

const AllPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSize, setActiveSize] = useState("All");
  const [activeColor, setActiveColor] = useState("All");
  const [activePrice, setActivePrice] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");

  const [favoriteMessage, setFavoriteMessage] = useState("");

  const { isFavorite, toggleFavorite } = useAuth();

  const categories = [
    "All",
    "Summer",
    "Dresses",
    "Tops",
    "Bottoms",
    "Accessories",
  ];

  const sizes = ["All", "XS", "S", "M", "L", "XL", "One Size"];

  const colors = [
    "All",
    "Black",
    "White",
    "Cream",
    "Beige",
    "Brown",
    "Blue",
    "Red",
    "Green",
    "Pink",
    "Gold",
    "Silver",
  ];

  const priceRanges = [
    "All",
    "Under $50",
    "$50 - $100",
    "Over $100",
  ];

  useEffect(() => {
    if (!favoriteMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setFavoriteMessage("");
    }, 1800);

    return () => clearTimeout(timer);
  }, [favoriteMessage]);

  const handleToggleFavorite = (product, event) => {
    if (event) {
      event.stopPropagation();
    }

    const message = toggleFavorite(product);
    setFavoriteMessage(message);
  };

  const getPriceNumber = (price) => {
    return Number(price.replace("$", ""));
  };

  const productMatchesSearch = (product) => {
    const searchValue = searchText.toLowerCase().trim();

    if (!searchValue) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.mainCategory.toLowerCase().includes(searchValue)
    );
  };

  const productMatchesCategory = (product) => {
    if (activeCategory === "All") {
      return true;
    }

    return product.mainCategory === activeCategory;
  };

  const productMatchesSize = (product) => {
    if (activeSize === "All") {
      return true;
    }

    return product.sizes?.includes(activeSize);
  };

  const productMatchesColor = (product) => {
    if (activeColor === "All") {
      return true;
    }

    return product.colors?.some(
      (color) =>
        color.name.toLowerCase() === activeColor.toLowerCase()
    );
  };

  const productMatchesPrice = (product) => {
    if (activePrice === "All") {
      return true;
    }

    const price = getPriceNumber(product.price);

    if (activePrice === "Under $50") {
      return price < 50;
    }

    if (activePrice === "$50 - $100") {
      return price >= 50 && price <= 100;
    }

    if (activePrice === "Over $100") {
      return price > 100;
    }

    return true;
  };

  const filteredProducts = allProducts.filter((product) => {
    return (
      productMatchesSearch(product) &&
      productMatchesCategory(product) &&
      productMatchesSize(product) &&
      productMatchesColor(product) &&
      productMatchesPrice(product)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "LowToHigh") {
      return getPriceNumber(a.price) - getPriceNumber(b.price);
    }

    if (sortOption === "HighToLow") {
      return getPriceNumber(b.price) - getPriceNumber(a.price);
    }

    return 0;
  });

  const hasActiveFilters =
    searchText ||
    activeCategory !== "All" ||
    activeSize !== "All" ||
    activeColor !== "All" ||
    activePrice !== "All" ||
    sortOption !== "Newest";

  const clearFilters = () => {
    setSearchText("");
    setActiveCategory("All");
    setActiveSize("All");
    setActiveColor("All");
    setActivePrice("All");
    setSortOption("Newest");
  };

  if (selectedProduct) {
    return (
      <>
        {favoriteMessage && (
          <div className="favorite-toast-popup">
            <span className="favorite-toast-icon">
              {favoriteMessage.includes("Create") ? "!" : "♥"}
            </span>

            <strong>{favoriteMessage}</strong>
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
        <div className="favorite-toast-popup">
          <span className="favorite-toast-icon">
            {favoriteMessage.includes("Create") ? "!" : "♥"}
          </span>

          <strong>{favoriteMessage}</strong>
        </div>
      )}

      <section className="all-page">
        <section
          className="all-hero"
          style={{ backgroundImage: `url(${allHero})` }}
        >
          <div className="all-hero-overlay">
            <div className="all-hero-content">
              <p className="all-hero-eyebrow">
                Every piece. One elegant closet.
              </p>

              <h1 className="all-hero-title">
                All
                <br />
                Collection
              </h1>

              <p className="all-hero-description">
                Explore every Chérie’s piece from dresses and tops to
                bottoms, accessories, and summer favorites.
              </p>
            </div>
          </div>
        </section>

        <section className="faceted-search-panel">
          <div className="faceted-search-header">
            <div>
              <p className="faceted-search-eyebrow">
                Refine your closet
              </p>

              <h2>Find your perfect piece</h2>
            </div>

            <p className="faceted-result-count">
              {sortedProducts.length} item
              {sortedProducts.length === 1 ? "" : "s"} found
            </p>
          </div>

          <div className="faceted-search-grid">
            <label className="faceted-search-field faceted-search-wide">
              Search
              <input
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(event.target.value)
                }
                placeholder="Search dresses, tops, black, summer..."
              />
            </label>

            <label className="faceted-search-field">
              Category
              <select
                value={activeCategory}
                onChange={(event) =>
                  setActiveCategory(event.target.value)
                }
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="faceted-search-field">
              Size
              <select
                value={activeSize}
                onChange={(event) =>
                  setActiveSize(event.target.value)
                }
              >
                {sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label className="faceted-search-field">
              Color
              <select
                value={activeColor}
                onChange={(event) =>
                  setActiveColor(event.target.value)
                }
              >
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>

            <label className="faceted-search-field">
              Price
              <select
                value={activePrice}
                onChange={(event) =>
                  setActivePrice(event.target.value)
                }
              >
                {priceRanges.map((priceRange) => (
                  <option key={priceRange} value={priceRange}>
                    {priceRange}
                  </option>
                ))}
              </select>
            </label>

            <label className="faceted-search-field">
              Sort
              <select
                value={sortOption}
                onChange={(event) =>
                  setSortOption(event.target.value)
                }
              >
                <option value="Newest">Newest Arrivals</option>
                <option value="LowToHigh">Price: Low to High</option>
                <option value="HighToLow">Price: High to Low</option>
              </select>
            </label>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          )}
        </section>

        {sortedProducts.length > 0 ? (
          <div className="all-grid">
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
        ) : (
          <div className="no-products-box">
            <p>No pieces match your filters.</p>

            <button type="button" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default AllPage;