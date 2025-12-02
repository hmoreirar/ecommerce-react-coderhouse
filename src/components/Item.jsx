import { Button } from "bootstrap";
import "./Item.css";
import ButtonAddToCart from "./ButtonAddToCart";
import StateComponent from "./StateComponent";
import { Link } from "react-router";
function Item({ id, title, img, price }) {
  return (
    <div className="item-card">
      <h2 className="item-card-title">{title}</h2>
      <img className="item-card-img" height="300" src={img} alt={title} />
      <p className="item-card-price">Precio: ${price}</p>
      <StateComponent />
      <br />
      <Link to={`/detalle/${id}`}>
        <button className="btn btn-primary">Ir a Detalle</button>
      </Link>
      <br />
    </div>
  );
}
// Exporta el componente Item
export default Item;
