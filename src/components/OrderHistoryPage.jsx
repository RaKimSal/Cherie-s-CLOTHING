import { useAuth } from "../context/useAuth";

import "./OrderHistoryPage.css";

const OrderHistoryPage = ({ onContinueShopping }) => {
  const { orders } = useAuth();

  return (
    <section className="orders-page">
      <div className="orders-header">
        <p className="orders-eyebrow">
          Your purchases
        </p>

        <h1 className="orders-title">
          Order History
        </h1>

        <p className="orders-description">
          View your past orders and current order status.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="orders-empty">
          <h2>No orders yet</h2>

          <p>
            Once you place an order, your order history and status
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
        <div className="orders-list">
          {orders.map((order) => (
            <article
              key={order.orderId}
              className="order-card"
            >
              <div className="order-card-header">
                <div>
                  <p className="order-number">
                    {order.orderId}
                  </p>

                  <p className="order-date">
                    Placed on {order.date}
                  </p>
                </div>

                <span className="order-status">
                  {order.status}
                </span>
              </div>

              <div className="order-items">
                {order.items.map((item) => (
                  <div
                    key={item.cartId}
                    className="order-item"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                    />

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

              <div className="order-summary">
                <div>
                  <span>Subtotal</span>
                  <strong>${order.subtotal.toFixed(2)}</strong>
                </div>

                <div>
                  <span>Shipping</span>
                  <strong>
                    {order.shipping === 0
                      ? "Free"
                      : `$${order.shipping.toFixed(2)}`}
                  </strong>
                </div>

                <div className="order-total">
                  <span>Total</span>
                  <strong>${order.total.toFixed(2)}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderHistoryPage;