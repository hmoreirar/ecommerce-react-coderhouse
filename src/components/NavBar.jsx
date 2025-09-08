import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand text-white fw-bold" href="#">
          MiTienda
        </a>

        {/* Enlaces */}
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Contacto
            </a>
          </li>
        </ul>

        {/* Carrito */}
        <CartWidget />
      </div>
    </nav>
  );
}
