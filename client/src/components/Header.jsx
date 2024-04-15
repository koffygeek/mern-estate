import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">CodingCleverly</span>
          <span className="text-sl">Estate</span>
        </h1>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
      </div>
    </header>
  );
};

export default Header;
