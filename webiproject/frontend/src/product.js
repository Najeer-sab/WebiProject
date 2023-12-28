import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setproducts] = useState();
  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3009/api/product/getproduct"
        );
        const data = await response.data;
        setproducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, []);

  console.log(products);

  return (
    <div className="container md-3">
      <h2>TOP CATEGORY  </h2>
      <div className="row">
        {products ? (
          products.map((el, index) => (
            <div key={index} className="col-sm-3  my-3 fs-6">
              <div className="card">
                <img src="/image/3.jpeg" />

                <p className="card-text text-truncate text-center">
                  {el.productName}
                </p>
                <p className="card-text text-truncate text-center">
                  {el.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Product;
