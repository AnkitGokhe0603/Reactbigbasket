import { useSelector } from 'react-redux';
import './OrderStyle.css'; // Scoped stylesheet

function Order() {
  // Get all placed orders from Redux state
  const orderProduct = useSelector(state => state.orders);

  // Generate the order list items
  const orderListItems = orderProduct.map((order, index) => (
    <li key={index} className="order-item">
      <ul>
        {/* Display Order ID and Date from stored data */}
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <p><strong>Order Date:</strong> {order.date}</p>

        {/* Display all items in this order */}
        {order.items.map((item, idx) => (
          <li key={idx} className="order-product">
            <img src={item.image} alt={item.name} className="order-product-img" />
            <p><strong>Item:</strong> {item.name}</p>
            <p><strong>Price:</strong> ₹{item.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Total:</strong> ₹{item.price * item.quantity}</p>
          </li>
        ))}

        {/* Display total order amount */}
        <p><strong>Total Order Amount:</strong> ₹{order.finalAmount.toFixed(2)}</p>
      </ul>
    </li>
  ));

  return (
    <div className="order-history-container">
      <h2>Purchase History</h2>

      {/* If no orders placed */}
      {orderProduct.length === 0 ? (
        <p>No Purchase History Available</p>
      ) : (
        <>
          <h1>Your Orders</h1>
          <ol>{orderListItems}</ol>
        </>
      )}
    </div>
  );
}

export default Order;