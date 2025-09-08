import { ShoppingCart } from "lucide-react";

export default function CartWidget() {
  return (
    <div className="d-flex align-items-center text-white">
      <ShoppingCart size={24} />
      <span className="badge bg-danger ms-2">0</span>
    </div>
  );
}
