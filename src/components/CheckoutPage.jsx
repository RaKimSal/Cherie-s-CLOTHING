import { useState } from "react";
import { useAuth } from "../context/useAuth";

import "./CheckoutPage.css";

const CheckoutPage = ({
  onBackToCart,
  onContinueShopping,
  onViewOrders,
  onSurvey,
}) => {
  const { cart, currentUser, placeOrder } = useAuth();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedOrder, setPlacedOrder] = useState(null);

  const [checkoutForm, setCheckoutForm] = useState({
    fullName: currentUser ? currentUser.name : "",
    email: currentUser ? currentUser.email : "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    paymentMethod: "Credit Card",
  });

  const getPriceNumber = (price) => {
    return Number(price.replace("$", ""));
  };

  const subtotal = cart.reduce((total, item) => {
    return total + getPriceNumber(item.price) * item.quantity;
  }, 0);

  const shipping = subtotal >= 100 || subtotal === 0 ? 0 : 12;
  const total = subtotal + shipping;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCheckoutForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    const result = placeOrder(checkoutForm);

    if (!result.success) {
      return;
    }

    setPlacedOrder(result.order);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    const isGuestOrder = placedOrder?.isGuestOrder;

    return (
      <section className="checkout-page">
        <div className="checkout-success-box">
          <p className="checkout-success-eyebrow">
            Order placed
          </p>

          <h1>Thank you for your order!</h1>

          {isGuestOrder ? (
            <p>
              Your order confirmation has been sent to{" "}
              <strong>
                {placedOrder?.customer?.email}
              </strong>
              . Since this order was placed as a guest, it will not be saved to
              order history.
            </p>
          ) : (
            <p>
              Your order has been saved to your order history. Your current
              order status is{" "}
              <strong>{placedOrder?.status}</strong>.
            </p>
          )}

          <div className="checkout-order-number">
            Order Number:{" "}
            <span>{placedOrder?.orderId}</span>
          </div>

          <div className="checkout-success-actions">
            {!isGuestOrder && (
              <button type="button" onClick={onViewOrders}>
                View Order History
              </button>
            )}

            <button
              type="button"
              className="checkout-success-secondary"
              onClick={onSurvey}
            >
              Share Feedback
            </button>

            <button
              type="button"
              className="checkout-success-secondary"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <p className="checkout-eyebrow">
          Secure checkout
        </p>

        <h1 className="checkout-title">
          Checkout
        </h1>

        <p className="checkout-description">
          Complete your information below to place your order.
        </p>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={handlePlaceOrder}
        >
          <div className="checkout-form-section">
            <h2>Customer Information</h2>

            <div className="checkout-two-columns">
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  value={checkoutForm.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={checkoutForm.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </label>
            </div>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={checkoutForm.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </label>
          </div>

          <div className="checkout-form-section">
            <h2>Shipping Address</h2>

            <label>
              Street Address
              <input
                type="text"
                name="address"
                value={checkoutForm.address}
                onChange={handleInputChange}
                placeholder="Enter your street address"
                required
              />
            </label>

            <div className="checkout-three-columns">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={checkoutForm.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </label>

              <label>
                Province
                <input
                  type="text"
                  name="province"
                  value={checkoutForm.province}
                  onChange={handleInputChange}
                  placeholder="Province"
                  required
                />
              </label>

              <label>
                Postal Code
                <input
                  type="text"
                  name="postalCode"
                  value={checkoutForm.postalCode}
                  onChange={handleInputChange}
                  placeholder="Postal code"
                  required
                />
              </label>
            </div>
          </div>

          <div className="checkout-form-section">
            <h2>Payment Method</h2>

            <div className="checkout-payment-options">
              <label className="checkout-payment-card">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={
                    checkoutForm.paymentMethod === "Credit Card"
                  }
                  onChange={handleInputChange}
                />

                <span>Credit Card</span>
              </label>

              <label className="checkout-payment-card">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="PayPal"
                  checked={
                    checkoutForm.paymentMethod === "PayPal"
                  }
                  onChange={handleInputChange}
                />

                <span>PayPal</span>
              </label>

              <label className="checkout-payment-card">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Pay on Delivery"
                  checked={
                    checkoutForm.paymentMethod === "Pay on Delivery"
                  }
                  onChange={handleInputChange}
                />

                <span>Pay on Delivery</span>
              </label>
            </div>

            <p className="checkout-demo-note">
              Payment is a demo placeholder. No real payment will be processed.
            </p>
          </div>

          <div className="checkout-form-actions">
            <button
              type="button"
              className="checkout-back-btn"
              onClick={onBackToCart}
            >
              Back to Cart
            </button>

            <button
              type="submit"
              className="checkout-place-order-btn"
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </div>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {cart.length === 0 ? (
            <p className="checkout-empty-cart">
              Your cart is empty.
            </p>
          ) : (
            <div className="checkout-summary-items">
              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="checkout-summary-item"
                >
                  <img src={item.image} alt={item.name} />

                  <div>
                    <h3>{item.name}</h3>

                    <p>
                      {item.selectedColor} / {item.selectedSize}
                    </p>

                    <strong>{item.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="checkout-summary-line">
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>

          <div className="checkout-summary-line">
            <span>Shipping</span>

            <strong>
              {shipping === 0
                ? "Free"
                : `$${shipping.toFixed(2)}`}
            </strong>
          </div>

          <div className="checkout-summary-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutPage;