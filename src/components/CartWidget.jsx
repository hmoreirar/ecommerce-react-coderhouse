import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import cartContext from "../context/CartContext";

export default function CartWidget() {
  const { countItems } = useContext(cartContext);
  return (
    <div className="d-flex align-items-center text-white">
      <ShoppingCart size={24} />
      <span className="badge bg-danger ms-2">{countItems()}</span>
    </div>
  );
}
