import Balance from "@/components/Available-Balance/Balance";
import Deposit from "@/components/Deposit/Deposit";
import Loan from "@/components/Loan/Loan";
import Withdraw from "@/components/Withdraw/Withdraw";
import React from "react";

const Home = () => {
  return (
    <div className="mx-36 mt-10">
      <section className="h-[300px] w-full rounded-lg grid grid-cols-5">
        <div className="col-span-2 flex flex-col justify-around gap-y-5">
          <Balance />
          <Deposit />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <img
            className="w-28"
            src="https://cdn-icons-png.freepik.com/256/13538/13538781.png?ga=GA1.1.945868740.1697346172&semt=ais"
          ></img>
        </div>
        <div className="col-span-2 flex flex-col justify-around gap-y-5 ">
          <Loan />
          <Withdraw />
        </div>
      </section>
    </div>
  );
};

export default Home;
