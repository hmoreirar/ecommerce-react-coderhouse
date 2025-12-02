import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer";
import app, { getProducts } from "./data/firebase";

export default function App() {
  console.log(app);
  getProducts();
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje="Bienvenido!" />}
          />
          <Route path="/category/:categParam" element={<ItemListContainer />} />
          <Route path="/detalle/:idParam" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1>Error 404: Página no encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
