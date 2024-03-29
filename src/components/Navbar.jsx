const Navbar = () => {
  return (
    <nav className="container">
      <div className="logoNavbar">
        <img src="/src/assets/img/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
