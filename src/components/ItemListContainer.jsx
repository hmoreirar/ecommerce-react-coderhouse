import Item from "./Item";
import { getProducts, getProductsByCateg } from "../data/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ItemListContainer({ mensaje }) {
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();

  useEffect(() => {
    if (categParam) {
      getProductsByCateg(categParam).then((productsByCateg) => {
        setProducts(productsByCateg);
      });
    } else {
      getProducts()
        .then((productList) => {
          setProducts(productList);
        })
        .catch((error) => {
          alert("Error al cargar los productos", error);
        })
        .finally(() => {
          console.log("Proceso de carga finalizado");
        });
    }
  }, [categParam]);

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
          <Item key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
