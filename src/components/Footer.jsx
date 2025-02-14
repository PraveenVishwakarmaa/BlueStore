import React from "react";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import logo from "../assets/blue-store-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-slate-500 text-sm flex items-center justify-center py-6 bottom-0 w-full">
      <div className="m-auto px-6 w-4/5">
        <div className=" flex flex-row">
          <div className="f-item basis-7">
            <h3 className=" text-white mb-5">Download Our App</h3>
            <p className=" block text-gray-500 ms">
              Downlaod App for Android
              <br /> and IOS mobile phone
            </p>
            <div className="mt-5">
              <img src={playStore} className=" w-36 rounded" />
              <img src={appStore} className=" w-36 rounded" />
            </div>
          </div>
          <div className="f-item flex flex-col flex-1 text-center items-center">
            <img src={logo} className=" w-44 mb-5 rounded" />
            <p className="block text-gray-500 ms">
              Lorem, ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Porro, eum?
            </p>
          </div>
          <div className="f-item basis-1/6 text-center">
            <h3 className=" text-white mb-5">Useful Links</h3>
            <ul className=" list-none">
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Affiliate</li>
            </ul>
          </div>
          <div className="f-item basis-1/6 text-center">
            <h3 className="text-white mb-5">Follow Us</h3>
            <ul className=" list-none">
              <li>Facebook</li>
              <li>X</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <hr className=" border-none bg-gray-400 h-px my-5"/>
        <p className=" text-gray-400 text-center">Copyright 2025 - Blue-Store</p>
      </div>
    </div>
  );
};

export default Footer;
