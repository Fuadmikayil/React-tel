import React from "react";
import { products } from "../data/products";

const Product = () => {
  return (
    <section className="flex flex-wrap gap-5 px-5"> 
      {products.map((items, key) => {
        return (
          <div id={key} className=" w-[270px] shadow-xl shadow-gray-900 rounded-lg p-5 space-y-3 ">
            <img className=" rounded-2xl " src={items.img} alt="" />
            <h3>{items.title} <span>{items.feature.memory} <span>{items.feature.color}</span></span></h3>
            <h4>{items.price} azn</h4>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
