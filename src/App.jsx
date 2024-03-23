import "./App.css";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />

      <div className="main">
        <div className="main-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="main-btn">
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className="main-shopping">
            <p>Also Available On</p>
            <div className="main-brand-icons">
              <img src="../src/assets/img/flipkart.png" alt="flipkart" />
              <img src="../src/assets/img/amazon.png" alt="amazon" />
            </div>
          </div>
        </div>
        <div className="main-image">
          <img src="../src/assets/img/shoe_image.png" alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default App;
