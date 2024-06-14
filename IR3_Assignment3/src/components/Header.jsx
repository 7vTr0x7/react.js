const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4 ">
        <h1 className="fs-1 fw-normal">My Social Media</h1>
        <nav className="pt-4">
          <ul className="nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">Profile</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
