import { Button } from "bootstrap";
import "./Item.css";
import ButtonAddToCart from "./ButtonAddToCart";
import StateComponent from "./StateComponent";
function Item({ title, img, price }) {
  return (
    <div className="item-card">
      <h2 className="item-card-title">{title}</h2>
      <img className="item-card-img" height="300" src={img} alt={title} />
      <p className="item-card-price">Precio: ${price}</p>
      <StateComponent />
      <br />
      <ButtonAddToCart />
    </div>
  );
}
// Exporta el componente Item
export default Item;
