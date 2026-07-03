import { useAuth } from "../context/useAuth";

import "./FavoritesPage.css";

const FavoritesPage = ({ onContinueShopping }) => {
  const { favorites, toggleFavorite } = useAuth();

  return (
    <section className="favorites-page">
      <div className="favorites-page-header">
        <p className="favorites-page-eyebrow">
          Your saved style pieces
        </p>

        <h1 className="favorites-page-title">
          Favorites
        </h1>

        <p className="favorites-page-description">
          Keep track of the Chérie’s pieces you love most.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No favorites yet</h2>

          <p>
            Tap the heart icon on any product to save it here.
          </p>

          <button
            type="button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="favorites-grid">
            {favorites.map((item) => (
              <article
                key={item.id}
                className="favorite-item-card"
              >
                <div className="favorite-item-image-wrap">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="favorite-item-image"
                  />
                </div>

                <div className="favorite-item-info">
                  <h3>{item.name}</h3>

                  <p className="favorite-item-price">
                    {item.price}
                  </p>

                  <p className="favorite-item-detail">
                    Color: <span>{item.selectedColor}</span>
                  </p>

                  <button
                    type="button"
                    className="favorite-remove-btn"
                    onClick={() => toggleFavorite(item)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="favorites-bottom-action">
            <button
              type="button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default FavoritesPage;