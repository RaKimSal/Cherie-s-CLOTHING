import "./ProductCard.css";

const ProductCard = ({
  product,
  onProductClick,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <article
      className="product-card"
      onClick={() => onProductClick(product)}
    >
      <div className="product-card-image-wrapper">
        {product.discountLabel && (
          <span className="product-card-discount">
            {product.discountLabel}
          </span>
        )}

        <button
          type="button"
          className={`product-card-heart ${
            isFavorite(product.id) ? "product-card-heart-active" : ""
          }`}
          aria-label={
            isFavorite(product.id)
              ? `Remove ${product.name} from favorites`
              : `Add ${product.name} to favorites`
          }
          onClick={(event) => onToggleFavorite(product, event)}
        >
          {isFavorite(product.id) ? "♥" : "♡"}
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>

      <div className="product-card-info">
        <h3 className="product-card-name">
          {product.name}
        </h3>

        {product.originalPrice ? (
          <div className="product-card-sale-price-row">
            <span className="product-card-old-price">
              {product.originalPrice}
            </span>

            <span className="product-card-sale-price">
              {product.price}
            </span>
          </div>
        ) : (
          <p className="product-card-price">
            {product.price}
          </p>
        )}

        <div className="product-card-colors">
          {product.colors.map((color) => (
            <span
              key={color.name}
              className="product-card-color"
              style={{ backgroundColor: color.hex }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;