import React from "react";

const SingleProduct = ({ data }) => {
  return (
    <div className="p-2 shadow border relative rounded">
      <img className=" rounded" src={data.img} alt="" />
      <h1 className="text-xl">{data.name}</h1>
      <h1 className="text-lg">${data.price}</h1>
      <div className="mt-12 mb-10">
        <p className="text-sm">Manufacturer: {data.seller}</p>
        <p className=" text-sm">Manufacturer: {data.rating} Star</p>
        <button className="w-full bg-orange-200 py-1 px-2 rounded absolute left-0 bottom-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
