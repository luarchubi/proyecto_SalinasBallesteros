import Cart from "./CartWidget"
function Navbar() {
    return (
      <>
        <nav>
          <ul className="navBar">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="products.html">Productos y servicios</a>
            </li>
            <li>
              <a href="aboutUs.html">Sobre nosotros</a>
            </li>
            <li>
              <a href="contact.html">Contacto</a>
            </li>
          <li>
            <Cart />
          </li>
          </ul>
        </nav>
      
      </>
    );
}
export default Navbar;
