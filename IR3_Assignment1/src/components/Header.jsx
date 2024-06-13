import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>Ecommerce Website</h1>
        <nav className="pt-4">
          <ul className="nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">Products</li>
            <li className="nav-item">About</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
