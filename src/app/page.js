import Balance from "@/components/Available-Balance/Balance";
import Deposit from "@/components/Deposit/Deposit";
import React from "react";

const Home = () => {
  return (
    <div className="mx-36 mt-10">
      <section className="h-[300px] w-full bg-green-950 rounded-lg grid grid-cols-5">
        <div className="col-span-2 flex flex-col justify-around ml-20">
          <Balance />
          <Deposit />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Balance />
        </div>
        <div className="col-span-2 flex flex-col justify-around items-end mr-20">
          <Balance />
          <Balance />
        </div>
      </section>
    </div>
  );
};

export default Home;
