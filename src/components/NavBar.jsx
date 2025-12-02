import { Link } from "react-router";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          MiTienda
        </Link>

        {/* Enlaces */}
        <ul className="nav">
          <li className="nav-item">
            <Link to="/category/guitarras" className="nav-link text-white">
              Guitarras
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/bajos" className="nav-link text-white">
              Bajos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/teclados" className="nav-link text-white">
              Teclados
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/baterías" className="nav-link text-white">
              Baterías
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/cuerdas" className="nav-link text-white">
              Cuerdas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/vientos" className="nav-link text-white">
              Vientos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/percusión" className="nav-link text-white">
              Percusión
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/accesorios" className="nav-link text-white">
              Accesorios
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/amplificadores" className="nav-link text-white">
              Amplificadores
            </Link>
          </li>
        </ul>

        {/* Carrito */}
        <Link to="/cart" className="text-white">
          <span>
            {" "}
            <CartWidget />{" "}
          </span>
        </Link>
      </div>
    </nav>
  );
}
