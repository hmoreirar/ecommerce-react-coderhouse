import { useState } from "react";

function ButtonAddToCart() {
  let [statusInCart, setStatusInCart] = useState(
    "No agregaste este item al carrito"
  );

  function handleClick() {
    setStatusInCart("Agregado al carrito exitosamente!");
  }
  return (
    <div>
      <button onClick={handleClick} className="btn btn-primary">
        Agregar al carrito
      </button>
      <br />
      <small>{statusInCart}</small>
    </div>
  );
}

export default ButtonAddToCart;
