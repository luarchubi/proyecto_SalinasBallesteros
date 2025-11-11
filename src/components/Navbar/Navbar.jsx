import Cart from "../CartWidget/CartWidget";
import "./NavBar.css";

function Navbar() {
  return (
    <>
      <nav className="navBar">
        <ul>
          <li>Género</li>
          <li>Autor</li>
          <li></li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
