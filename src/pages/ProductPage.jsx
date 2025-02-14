import React from "react";
import Products from "../components/Product";
import NavigationKeys from "../components/NavigationKeys";

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Products count="12" />
      <NavigationKeys />
    </div>
  );
};

export default ProductPage;
