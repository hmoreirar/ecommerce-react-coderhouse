import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a MiTienda!" />
    </>
  );
}
