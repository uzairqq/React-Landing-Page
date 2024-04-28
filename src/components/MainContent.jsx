import flipKart from "/assets/flipkart.png";
import amazon from "/assets/amazon.png";
import shoeImage from "/assets/shoe_image.png";

const MainContent = () => {
  return (
    <main className="main container">
      <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="main-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="main-shopping">
          <p>Also Available On</p>
          <div className="main-brand-icons">
            <img src={flipKart} alt="flipkart" />
            <img src={amazon} alt="amazon" />
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src={shoeImage} alt="shoes" />
      </div>
    </main>
  );
};

export default MainContent;
