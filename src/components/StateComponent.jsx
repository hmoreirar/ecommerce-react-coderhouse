import { useState } from "react";

export default function StateComponent() {
  const [color, setColor] = useState("#000000");

  return (
    <div>
      <p>
        Selecciona tu color favorito:
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: color,
            marginLeft: "10px",
          }}
        >
          {" "}
        </span>
      </p>
      <button
        onClick={function () {
          setColor("#000000");
        }}
      >
        Negro
      </button>
      <button
        onClick={function () {
          setColor("#FF0000");
        }}
      >
        Rojo
      </button>
      <button
        onClick={function () {
          setColor("#0000FF");
        }}
      >
        Azul
      </button>
    </div>
  );
}
