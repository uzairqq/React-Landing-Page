import "./App.css";
const App = () => {
  return (
    <div>
      <nav>
        <div className="logoNavbar">
          <img src="/src/assets/img/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default App;
