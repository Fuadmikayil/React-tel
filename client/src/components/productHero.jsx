import React from "react";
import { products } from "../data/products";
import { NavLink } from "react-router-dom";

const Product = () => {
  function info(item) {
    localStorage.setItem("selectProduct", JSON.stringify(item));
  }

  return (
    <section className="flex flex-wrap gap-5 px-5 ">
      {products.map((item, key) => (
        <NavLink 
          onClick={() => info(item)} 
          key={key} 
          to="/main"
          className="w-[270px] shadow-xl shadow-gray-900 rounded-lg p-5 space-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"
        >
          <img className="rounded-2xl" src={item.img} alt={item.title} />
          <h3>
            {item.title} <span>{item.feature.memory} <span>{item.feature.color}</span></span>
          </h3>
          <h4>{item.price} azn</h4>
        </NavLink>
      ))}
    </section>
  );
};

export default Product;
