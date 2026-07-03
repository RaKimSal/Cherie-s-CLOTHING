import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";

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
  const {
    currentUser,
    addToCart,
    toggleFavorite,
    isFavorite,
  } = useAuth();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [toastIcon, setToastIcon] = useState("♥");
  const [shakeButton, setShakeButton] = useState(false);

  const newArrivals = [
    {
      id: "new-arrival-1",
      name: "Elegant Off-Shoulder Dress",
      price: "$89.00",
      image: newInOne,
      images: [
        newInOne,
        newInOneBack,
        newInOneBlack,
        newInOneRed,
      ],
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
      description:
        "An elegant fitted dress designed for a timeless and feminine look.",
    },
    {
      id: "new-arrival-2",
      name: "Linen Vest Trouser Set",
      price: "$109.00",
      image: newInTwo,
      images: [
        newInTwo,
        newInTwoBlue,
        newInTwoGray,
        newInTwoRose,
      ],
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
      description:
        "A polished vest and trouser set made for a soft, elevated style.",
    },
    {
      id: "new-arrival-3",
      name: "Strapless Linen Jumpsuit",
      price: "$79.00",
      image: newInThree,
      images: [
        newInThree,
        newInThreeBack,
        newInThreeDetail,
      ],
      colors: [
        {
          name: "Cream",
          hex: "#e6dccb",
          image: newInThree,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      description:
        "A relaxed cream jumpsuit with soft fabric and an effortless silhouette.",
    },
    {
      id: "new-arrival-4",
      name: "Textured Co-Ord Set",
      price: "$99.00",
      image: newInFour,
      images: [
        newInFour,
        newInFourBack,
        newInFourDetail,
      ],
      colors: [
        {
          name: "Cream",
          hex: "#f4efe6",
          image: newInFour,
        },
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      description:
        "A chic matching set with a clean shape and timeless everyday style.",
    },
  ];

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timer = setTimeout(() => {
      setToastMessage("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [toastMessage]);

  const showToast = (message, icon) => {
    setToastMessage(message);
    setToastIcon(icon);
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedImage(product.images[0]);
    setSelectedColor("");
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

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleToggleFavorite = (product, event) => {
    if (event) {
      event.stopPropagation();
    }

    if (!currentUser) {
      showToast(
        "Create a profile to add this to your favorite.",
        "!"
      );

      return;
    }

    const message = toggleFavorite(product);
    const icon = message.includes("Removed") ? "♡" : "♥";

    showToast(message, icon);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) {
      return;
    }

    if (!selectedColor || !selectedSize) {
      showToast(
        "Please choose a color and size before adding to cart.",
        "!"
      );

      setShakeButton(true);

      setTimeout(() => {
        setShakeButton(false);
      }, 450);

      return;
    }

    const message = addToCart(
      selectedProduct,
      selectedColor,
      selectedSize
    );

    showToast(message, "✓");
  };

  return (
    <>
      {toastMessage && (
        <div className="favorite-toast-popup">
          <span className="favorite-toast-icon">
            {toastIcon}
          </span>

          <strong>{toastMessage}</strong>
        </div>
      )}

      <section className="new-arrivals-section">
        <div className="new-arrivals-header">
          <h2 className="new-arrivals-title">
            New Arrivals
          </h2>
        </div>

        <div className="new-arrivals-grid">
          {newArrivals.map((item) => (
            <article
              key={item.id}
              className="new-arrival-card"
              onClick={() => openProduct(item)}
            >
              <div className="new-arrival-image-wrapper">
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
                <h3 className="new-arrival-name">
                  {item.name}
                </h3>

                <p className="new-arrival-price">
                  {item.price}
                </p>

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
                    <img
                      src={image}
                      alt={selectedProduct.name}
                    />
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
                  Color:{" "}
                  <span>
                    {selectedColor || "Choose a color"}
                  </span>
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
                <div className="product-option-heading">
                  Size:{" "}
                  <span>
                    {selectedSize || "Choose a size"}
                  </span>
                </div>

                <div className="product-size-options">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`product-size-button ${
                        selectedSize === size
                          ? "selected-size"
                          : ""
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="product-detail-actions">
                <button
                  type="button"
                  className={`product-add-cart ${
                    shakeButton ? "shake-newarrival-cart" : ""
                  }`}
                  onClick={handleAddToCart}
                >
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