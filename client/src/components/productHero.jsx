import React from "react";
import { products } from "../data/products";
import { NavLink } from "react-router-dom";
const Product = () => {
  function İnfo(items,key) {
    console.log(items);
    console.log(key);
  }

  return (
    <section className="flex flex-wrap gap-5 px-5 ">
      {products.map((items, key) => (
        <NavLink 
          onClick={() => İnfo(items,key)} // items parametre olarak Salam fonksiyonuna gönderiliyor
          key={key} 
          to="/main"
          className="w-[270px] shadow-xl shadow-gray-900 rounded-lg p-5 space-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"
        >
          <img className="rounded-2xl" src={items.img} alt={items.title} />
          <h3>{items.title} <span>{items.feature.memory} <span>{items.feature.color}</span></span></h3>
          <h4>{items.price} azn</h4>
        </NavLink>
      ))}
    </section>
  );
};

export default Product;
