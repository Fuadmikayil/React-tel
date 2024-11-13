import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const storedProduct = localStorage.getItem("selectProduct");
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) return <p>Mehsul tapilmadi...</p>;

  return (
    <section className="flex gap-5 px-5 ">
      <img className="rounded-2xl h-[300px]" src={product.img} alt={product.title} />
      <div>
        <h3>
          {product.title}{" "}
          <span>
            {product.feature.memory} <span>{product.feature.color}</span>
          </span>
        </h3>
        <h4>Fiyat: {product.price} AZN</h4>
      </div>
      <div>
      <button className="  rounded-xl bg-green-700 p-3 ">Sebete Elave et</button>
      </div>
    </section>
  );
};

export default ProductDetails;
