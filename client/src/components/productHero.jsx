import React, { useState, useEffect } from "react";
import { products } from "../data/products";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [arrayModel, setModel] = useState([]);
  const [arrayModelFilter, setModelFilter] = useState([]);

  useEffect(() => {
    const uniqueModels = new Set();
    products.forEach((element) => {
      const nameModel = element.title.split(" ")[0];
      uniqueModels.add(nameModel);
    });
    setModel([...uniqueModels]);
  }, []);

  function info(item) {
    localStorage.setItem("selectProduct", JSON.stringify(item));
  }
  function handleCheckboxChange(e) {
    const nameModel = e.target.innerText;
    if (arrayModelFilter.includes(nameModel)) {
      setModelFilter(arrayModelFilter.filter((model) => model !== nameModel));
    } else {
      setModelFilter([...arrayModelFilter, nameModel]);
    }
  }
  const displayedProducts =
    arrayModelFilter.length == 0
      ? products
      : products.filter((item) =>
          arrayModelFilter.includes(item.title.split(" ")[0])
        );

  return (
    <section className="flex gap-5 px-5 ">
      <div className="w-[300px]">
        <ul>
          <h2>Marka</h2>
          {arrayModel.map((item, key) => (
            <li key={key} className="space-x-1">
              <input type="checkbox" id={key}  />
              <label htmlFor={key}>
                <span onClick={handleCheckboxChange}>{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-5 px-5 ">
        {displayedProducts.map((item, key) => (
          <NavLink
            onClick={() => info(item)}
            key={key}
            to="/main"
            className="w-[270px] shadow-xl shadow-gray-900 rounded-lg p-5 space-y-3 hover:scale-105 transition-all duration-500 cursor-pointer"
          >
            <img className="rounded-2xl" src={item.img} alt={item.title} />
            <h3>
              {item.title}{" "}
              <span>
                {item.feature.memory} <span>{item.feature.color}</span>
              </span>
            </h3>
            <h4>{item.price} azn</h4>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Product;
