import Item from "./Item";
import getMockAPIData from "../data/mockAPI";
import { useEffect, useState } from "react";

export default function ItemListContainer({ mensaje }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getMockAPIData()
      .then((productList) => {
        setProducts(productList);
      })
      .catch((error) => {
        alert("Error al cargar los productos", error);
      })
      .finally(() => {
        console.log("Proceso de carga finalizado");
      });
  }, []);

  return (
    <main className="container py-4">
      <h1 className="text-center">{mensaje}</h1>
      <p className="text-center text-muted">
        Catálogo de productos disponibles
      </p>
      {products.length === 0 && <p>Cargando productos...</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <Item {...item} />
        ))}
      </div>
    </main>
  );
}
