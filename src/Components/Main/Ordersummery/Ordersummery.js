import React from "react";

const Ordersummery = () => {
  return (
    <div>
      <h1 className="mt-7 text-center text-2xl">Order Summery</h1>
      <div className="my-12 mx-10">
        <p>Select Items: 6</p>
        <p className="my-6">Total Price: $100</p>
        <p className="my-6">Shipping Charge: $89</p>
        <p className="my-6">Tax: $10</p>
        <p className="text-xl">Grand Total: $678</p>
      </div>
      <div className="text-center ">
        <button className="rounded bg-red-500 text-white w-11/12 py-2 mb-4">
          Clear
        </button>
        <button className="rounded bg-orange-500 text-white w-11/12 py-2 mb-4">
          Review
        </button>
      </div>
    </div>
  );
};

export default Ordersummery;
