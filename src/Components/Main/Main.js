import React, { useEffect, useState } from "react";
import Ordersummery from "./Ordersummery/Ordersummery";
import SingleProduct from "./SingleProduct/SingleProduct";
import Api from "../../fakeData/products.json";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Api);
  }, []);
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4 ">
        <div className="grid gap-10 m-5 grid-cols-3">
          {data.map((product) => (
            <SingleProduct key={product.id} data={product}></SingleProduct>
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-orange-200 h-screen sticky top-0">
        <Ordersummery></Ordersummery>
      </div>
    </div>
  );
};

export default Main;
