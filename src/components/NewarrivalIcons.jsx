import { useEffect, useState } from "react";

import newInOne from "../assets/img/newIn/newIn1-1.png";
import newInOneBack from "../assets/img/newIn/newIn1-2.png";
import newInOneBlack from "../assets/img/newIn/newIn1-black.png";
import newInOneRed from "../assets/img/newIn/newIn1-red.png";

import newInTwo from "../assets/img/newIn/newIn2-2.png";
import newInTwoBlue from "../assets/img/newIn/newIn2-blue.png";
import newInTwoGray from "../assets/img/newIn/newIn2-gray.png";
import newInTwoRose from "../assets/img/newIn/newIn2-rose.png";

import newInThree from "../assets/img/newIn/newIn3-1.png";
import newInThreeBack from "../assets/img/newIn/newIn3-2.png";
import newInThreeDetail from "../assets/img/newIn/newIn3-3.png";

import newInFour from "../assets/img/newIn/newIn4-1.png";
import newInFourBack from "../assets/img/newIn/newIn4-2.png";
import newInFourDetail from "../assets/img/newIn/newIn4-3.png";

import "./NewarrivalIcons.css";

const NewarrivalIcons = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [favoriteMessage, setFavoriteMessage] = useState("");

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("cheriesFavorites");

    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }

    return [];
  });

  const newArrivals = [
    {
      id: 1,
      name: "Elegant Off-Shoulder Dress",
      price: "$89.00",
      image: newInOne,
      images: [newInOne, newInOneBack, newInOneBlack, newInOneRed],
      colors: [
        {
          name: "White",
          hex: "#f5f0e8",
          image: newInOne,
        },
        {
          name: "Black",
          hex: "#111111",
          image: newInOneBlack,
        },
        {
          name: "Red",
          hex: "#b40016",
          image: newInOneRed,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      isNew: false,
      description:
        "An elegant fitted dress designed for a timeless and feminine look.",
    },
    {
      id: 2,
      name: "Linen Vest Trouser Set",
      price: "$109.00",
      image: newInTwo,
      images: [newInTwo, newInTwoBlue, newInTwoGray, newInTwoRose],
      colors: [
        {
          name: "Rose",
          hex: "#c8a39b",
          image: newInTwoRose,
        },
        {
          name: "Blue",
          hex: "#8ea7b7",
          image: newInTwoBlue,
        },
        {
          name: "Gray",
          hex: "#6e6e6e",
          image: newInTwoGray,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      isNew: true,
      description:
        "A polished vest and trouser set made for a soft, elevated style.",
    },
    {
      id: 3,
      name: "Strapless Linen Jumpsuit",
      price: "$79.00",
      image: newInThree,
      images: [newInThree, newInThreeBack, newInThreeDetail],
      colors: [
        {
          name: "Cream",
          hex: "#e6dccb",
          image: newInThree,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      isNew: false,
      description:
        "A relaxed cream jumpsuit with soft fabric and an effortless silhouette.",
    },
    {
      id: 4,
      name: "Textured Co-Ord Set",
      price: "$99.00",
      image: newInFour,
      images: [newInFour, newInFourBack, newInFourDetail],
      colors: [
        {
          name: "Cream",
          hex: "#f4efe6",
          image: newInFour,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      isNew: false,
      description:
        "A chic matching set with a clean shape and timeless everyday style.",
    },
  ];

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

    return () => {
      clearTimeout(timer);
    };
  }, [favoriteMessage]);

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.images[0]);
    setSelectedColor(product.colors[0].name);
    setSelectedSize("");
  };

  const closeProduct = () => {
    setSelectedProduct(null);
    setSelectedImage(null);
    setSelectedColor("");
    setSelectedSize("");
  };

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
    setSelectedImage(color.image);
  };

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
      selectedColor: selectedProduct
        ? selectedColor
        : product.colors[0].name,
      selectedSize: selectedSize || "Not selected yet",
    };

    setFavorites((currentFavorites) => [
      ...currentFavorites,
      favoriteItem,
    ]);

    setFavoriteMessage("Added to Favorites");
  };

  return (
    <>
      {favoriteMessage && (
        <div className="favorite-popup">
          <span className="favorite-popup-heart">♥</span>
          <span>{favoriteMessage}</span>
        </div>
      )}

      <section className="new-arrivals-section">
        <div className="new-arrivals-header">
          <h2 className="new-arrivals-title">New Arrivals</h2>

          <button type="button" className="new-arrivals-view-all">
            View All
          </button>
        </div>

        <div className="new-arrivals-grid">
          {newArrivals.map((item) => (
            <article
              key={item.id}
              className="new-arrival-card"
              onClick={() => openProduct(item)}
            >
              <div className="new-arrival-image-wrapper">
                {item.isNew && (
                  <span className="new-arrival-badge">New</span>
                )}

                <button
                  type="button"
                  className={`new-arrival-heart ${
                    isFavorite(item.id) ? "heart-active" : ""
                  }`}
                  aria-label={
                    isFavorite(item.id)
                      ? `Remove ${item.name} from favorites`
                      : `Add ${item.name} to favorites`
                  }
                  onClick={(event) =>
                    handleToggleFavorite(item, event)
                  }
                >
                  {isFavorite(item.id) ? "♥" : "♡"}
                </button>

                <img
                  src={item.image}
                  alt={item.name}
                  className="new-arrival-image"
                />
              </div>

              <div className="new-arrival-info">
                <h3 className="new-arrival-name">{item.name}</h3>

                <p className="new-arrival-price">{item.price}</p>

                <div className="new-arrival-colors">
                  {item.colors.map((color) => (
                    <span
                      key={color.name}
                      className="new-arrival-color"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <div
          className="product-detail-overlay"
          role="dialog"
          aria-modal="true"
        >
          <div className="product-detail-panel">
            <button
              type="button"
              className="product-detail-close"
              onClick={closeProduct}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="product-detail-gallery">
              <div className="product-detail-thumbnails">
                {selectedProduct.images.map((image) => (
                  <button
                    key={image}
                    type="button"
                    className={`product-thumbnail ${
                      selectedImage === image
                        ? "active-thumbnail"
                        : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={selectedProduct.name} />
                  </button>
                ))}
              </div>

              <div className="product-detail-main-image">
                <img
                  src={selectedImage}
                  alt={selectedProduct.name}
                />
              </div>
            </div>

            <div className="product-detail-info">
              <p className="product-detail-label">New Arrival</p>

              <h2 className="product-detail-name">
                {selectedProduct.name}
              </h2>

              <p className="product-detail-price">
                {selectedProduct.price}
              </p>

              <p className="product-detail-description">
                {selectedProduct.description}
              </p>

              <div className="product-option-block">
                <div className="product-option-heading">
                  Color: <span>{selectedColor}</span>
                </div>

                <div className="product-color-options">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      className={`product-color-button ${
                        selectedColor === color.name
                          ? "selected-color"
                          : ""
                      }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleColorClick(color)}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="product-option-block">
                <div className="product-option-heading">Size</div>

                <div className="product-size-options">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`product-size-button ${
                        selectedSize === size ? "selected-size" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-detail-actions">
                <button type="button" className="product-add-cart">
                  Add to Cart
                </button>

                <button
                  type="button"
                  className={`product-add-favorite ${
                    isFavorite(selectedProduct.id)
                      ? "favorite-active"
                      : ""
                  }`}
                  aria-label={
                    isFavorite(selectedProduct.id)
                      ? "Remove from favorite"
                      : "Add to favorite"
                  }
                  onClick={() =>
                    handleToggleFavorite(selectedProduct)
                  }
                >
                  {isFavorite(selectedProduct.id) ? "♥" : "♡"}
                </button>
              </div>

              <div className="product-simple-note">
                Free shipping on orders over $100.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewarrivalIcons;