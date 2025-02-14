import React from "react";
import jordan from "../assets/jordan.png";
import shipping from "../assets/shipping.png";
import returns from "../assets/return.png";
import gift from "../assets/gift.png";
import contact from "../assets/contact.png";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import Products from "../components/Product";

const Home = () => {

  return (
    <>
      <div className="flex items-center justify-evenly py-20">
        <h1 className=" text-center">Air<br/>Jordans</h1>
        <img src={jordan} alt="" className="shoe h-2.5/3 w-1/3" />
        <div>
          <h2 className="mt-2 text-white text-2xl px-7 py-2 border rounded">
            $ 149
          </h2>
          <button>Explore now →</button>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <img src={shipping} alt="" className="featureImg" />
          <span className="featureTitle">FREE SHIPPING</span>
          <span className=" featureDesc">
            Free worldwide shipping on all orders.
          </span>
        </div>
        <div className="feature">
          <img src={returns} alt="" className="featureImg" />
          <span className="featureTitle">30 DAYS RETURN</span>
          <span className=" featureDesc">
            No question return and easy refund in 14 days.
          </span>
        </div>
        <div className="feature">
          <img src={gift} alt="" className="featureImg" />
          <span className="featureTitle">GIFT CARDS</span>
          <span className=" featureDesc">
            Buy gift cards and use coupon codes easily.
          </span>
        </div>
        <div className="feature">
          <img src={contact} alt="" className="featureImg" />
          <span className="featureTitle">CONTACT US</span>
          <span className=" featureDesc">
            Keep in touch via email and support system.
          </span>
        </div>
      </div>
      <div className="gallery">
        <div className="galleryItem">
          <h1 className="galleryTitle">Be Yourself</h1>
          <img src={pic1} alt="" className="galleryImg" />
        </div>
        <div className="galleryItem">
          <img src={pic2} alt="" className="galleryImg" />
          <h1 className="galleryTitle">
            This is the First Day of Your New Life
          </h1>
        </div>
        <div className="galleryItem">
          <h1 className="galleryTitle">Just Do it!</h1>
          <img src={pic3} alt="" className="galleryImg" />
        </div>
      </div>
      <div>
      <div className=" flex flex-col items-center mb-3">
        <h2 className="title">Featured Products</h2>
        <Products count="4"/>
      </div>
      </div>
    </>
  );
};

export default Home;
