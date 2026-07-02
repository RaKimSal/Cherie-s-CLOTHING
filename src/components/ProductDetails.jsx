import { useState } from "react";

import "./ProductDetails.css";

const ProductDetails = ({
  product,
  onBack,
  isFavorite,
  onToggleFavorite,
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
    setSelectedImage(color.image);
  };

  return (
    <section className="product-detail-page">
      <button
        type="button"
        className="product-detail-back"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="product-detail-layout">
        <div className="product-detail-gallery-page">
          <div className="product-detail-thumbnails-page">
            {product.images.map((image) => (
              <button
                key={image}
                type="button"
                className={`product-detail-thumbnail-page ${
                  selectedImage === image
                    ? "active-thumbnail"
                    : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={product.name} />
              </button>
            ))}
          </div>

          <div className="product-detail-main-page">
            <img src={selectedImage} alt={product.name} />
          </div>
        </div>

        <div className="product-detail-content-page">
          <p className="product-detail-category-page">
            {product.category}
          </p>

          {product.discountLabel && (
            <span className="product-detail-discount-label">
              {product.discountLabel}
            </span>
          )}

          <h1 className="product-detail-title-page">
            {product.name}
          </h1>

          {product.originalPrice ? (
            <div className="product-detail-sale-price-row">
              <span className="product-detail-old-price">
                {product.originalPrice}
              </span>

              <span className="product-detail-sale-price">
                {product.price}
              </span>
            </div>
          ) : (
            <p className="product-detail-price-page">
              {product.price}
            </p>
          )}

          <p className="product-detail-description-page">
            {product.description}
          </p>

          <div className="product-detail-option-block">
            <div className="product-detail-option-heading">
              Color: <span>{selectedColor}</span>
            </div>

            <div className="product-detail-color-options">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`product-detail-color-button ${
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

          <div className="product-detail-option-block">
            <div className="product-detail-size-row">
              <div className="product-detail-option-heading">
                Size
              </div>

              <button
                type="button"
                className="product-detail-size-guide-btn"
                onClick={() => setShowSizeGuide(!showSizeGuide)}
              >
                Size Guide
              </button>
            </div>

            <div className="product-detail-size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`product-detail-size-button ${
                    selectedSize === size
                      ? "selected-size"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {showSizeGuide && (
              <div className="product-detail-size-guide">
                <h3>Size Guide</h3>

                <table>
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Hips</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>31-32"</td>
                      <td>24-25"</td>
                      <td>34-35"</td>
                    </tr>

                    <tr>
                      <td>S</td>
                      <td>33-34"</td>
                      <td>26-27"</td>
                      <td>36-37"</td>
                    </tr>

                    <tr>
                      <td>M</td>
                      <td>35-36"</td>
                      <td>28-29"</td>
                      <td>38-39"</td>
                    </tr>

                    <tr>
                      <td>L</td>
                      <td>37-39"</td>
                      <td>30-32"</td>
                      <td>40-42"</td>
                    </tr>

                    <tr>
                      <td>XL</td>
                      <td>40-42"</td>
                      <td>33-35"</td>
                      <td>43-45"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="product-detail-actions-page">
            <button
              type="button"
              className="product-detail-add-cart"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className={`product-detail-add-favorite ${
                isFavorite(product.id) ? "favorite-active" : ""
              }`}
              aria-label={
                isFavorite(product.id)
                  ? "Remove from favorite"
                  : "Add to favorite"
              }
              onClick={(event) => onToggleFavorite(product, event)}
            >
              {isFavorite(product.id) ? "♥" : "♡"}
            </button>
          </div>

          <div className="product-detail-shipping-note">
            Free shipping on orders over $100.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;