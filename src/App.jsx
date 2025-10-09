import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Item from "./components/Item";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a MiTienda!" />
    </>
  );
}
