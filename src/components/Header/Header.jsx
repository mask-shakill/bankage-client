import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between mx-36 pt-7">
      <h1 className="text-2xl font-bold text-green-600">
        Monthly <span className="text-blue-700">Wallet</span>
      </h1>

      <div className="flex items-center gap-x-5">
        <h1 className="font-semibold text-lg">Shakil</h1>
        <img
          className="w-20 h-20 rounded-full"
          src="https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=sph"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
