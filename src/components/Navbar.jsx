import logoNavBar from "/assets/brand_logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logoNavbar">
        <img src={logoNavBar} alt="logo" />
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
