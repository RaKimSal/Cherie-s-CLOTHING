import { useAuth } from "../context/useAuth";

import "./CartPage.css";

const CartPage = ({ onContinueShopping, onCheckout }) => {
  const { cart, removeFromCart } = useAuth();

  const getPriceNumber = (price) => {
    return Number(price.replace("$", ""));
  };

  const subtotal = cart.reduce((total, item) => {
    return total + getPriceNumber(item.price) * item.quantity;
  }, 0);

  return (
    <section className="cart-page">
      <div className="cart-page-header">
        <p className="cart-page-eyebrow">
          Your saved shopping bag
        </p>

        <h1 className="cart-page-title">
          Shopping Cart
        </h1>

        <p className="cart-page-description">
          Review your selected pieces before checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="cart-page-empty">
          <h2>Your cart is empty</h2>

          <p>
            Add your favorite Chérie’s pieces to your cart and they
            will appear here.
          </p>

          <button
            type="button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-page-layout">
          <div className="cart-page-items">
            {cart.map((item) => (
              <article
                key={item.cartId}
                className="cart-page-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-page-item-image"
                />

                <div className="cart-page-item-info">
                  <h3>{item.name}</h3>

                  <p>
                    Color: <span>{item.selectedColor}</span>
                  </p>

                  <p>
                    Size: <span>{item.selectedSize}</span>
                  </p>

                  <p>
                    Quantity: <span>{item.quantity}</span>
                  </p>

                  <strong>{item.price}</strong>
                </div>

                <button
                  type="button"
                  className="cart-page-remove"
                  onClick={() => removeFromCart(item.cartId)}
                >
                  Remove
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-page-summary">
            <h2>Order Summary</h2>

            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="cart-summary-row">
              <span>Shipping</span>
              <strong>
                {subtotal >= 100 ? "Free" : "$12.00"}
              </strong>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <strong>
                $
                {subtotal >= 100
                  ? subtotal.toFixed(2)
                  : (subtotal + 12).toFixed(2)}
              </strong>
            </div>

            <button
              type="button"
              className="cart-checkout-page-btn"
              onClick={onCheckout}
            >
              Checkout
            </button>

            <button
              type="button"
              className="cart-continue-btn"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </aside>
        </div>
      )}
    </section>
  );
};

export default CartPage;