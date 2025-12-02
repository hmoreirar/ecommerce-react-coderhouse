import StateComponent from "./StateComponent";
import ButtonAddToCart from "./ButtonAddToCart";
import { getProductById } from "../data/firebase";
import { useParams } from "react-router";
import { useEffect, useState, useContext } from "react";
import cartContext from "../context/cartContext";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true });
  const context = useContext(cartContext);
  useEffect(() => {
    getProductById(idParam)
      .then((response) => setProduct(response))
      .catch((error) => alert(error));
  }, []);

  if (product.loading) {
    return <p>Cargando detalle del producto...</p>;
  }
  return (
    <div className="item-card">
      <h2 className="item-card-title">{product.title}</h2>
      <img className="item-card-img" height="600" src={product.img} alt="" />
      <p className="item-card-price">Precio: $ {product.price}</p>
      <StateComponent />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <p>{product.description}</p>
      </div>
      <br />
      <div>
        <button
          onClick={() => context.addToCart(product)}
          className="btn btn-primary"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
export default ItemDetailContainer;
