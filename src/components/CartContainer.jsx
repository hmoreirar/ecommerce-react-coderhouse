import { useContext } from "react";
import cartContext from "../context/cartContext";
import { createOrder } from "../data/firebase";
import FormCheckout from "./FormCheckout";
import "./CartContainer.css";

function CartContainer() {
  const { cartItems, removeItem, clearCart } = useContext(cartContext);

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cartItems,
      price: 999,
      date: new Date(),
    };
    console.log("llamando a firebase, datos comprador", formData);
    const newOrder = await createOrder(orderData);
    clearCart();
    alert(`Compra realizada con éxito. Tu id de compra es: ${newOrder.id}`);
  }

  return (
    <div className="cart-container">
      <h3 className="cart-header">Tu carrito</h3>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item">
            <img width="100" src={item.img}></img>
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Unidades: {item.count}</p>
              <p>$ {item.price * item.count}</p>
            </div>
            <div className="cart-actions">
              <button className="btn-plain" onClick={() => removeItem(item.id)}>
                Quitar del carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <FormCheckout handleCheckout={handleCheckout} />
    </div>
  );
}

export default CartContainer;
