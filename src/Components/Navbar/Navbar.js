import React from "react";
import logo from "../../images/Logo.svg";
const Navbar = () => {
  return (
    <div className="px-10 items-center flex justify-between bg-slate-900 h-20">
      <img src={logo} alt="" />
      <ul className=" flex text-white">
        <button className="hover:bg-slate-700 py-1 rounded px-2 mx-2 fw-semibold">
          Order
        </button>
        <button className="hover:bg-slate-600 py-1 rounded px-2 mx-2 fw-semibold">
          Order Review
        </button>
        <button className="hover:bg-slate-600 py-1 rounded px-2 mx-2 fw-semibold">
          Manage Inventory
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
