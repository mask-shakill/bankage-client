import React from "react";

const Home = () => {
  return (
    <div className="mx-36 mt-10">
      <div className="h-[350px] w-full bg-green-900 rounded-md grid grid-cols-5">
        <div className="bg-red-400 col-span-2 flex flex-col justify-between">
          <div className="bg-green-500">div one</div>
          <div className="bg-indigo-500">div one</div>
        </div>
        <div className="bg-blue-400 col-span-1 flex items-center justify-center">
          div 1
        </div>
        {/* sa  */}
        <div className="bg-yellow-400 col-span-2 flex flex-col justify-between">
          <div className="bg-green-500">div one</div>
          <div className="bg-indigo-500">div one</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
