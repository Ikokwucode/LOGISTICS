import React from "react";
import Rider from "/Images/Character.png";
import { Outlet } from "react-router-dom";
function Authentication() {
  return (
    <section className=" h-[100%] w-[100%] flex bg-lGreen ">
      <div className="h-full w-[50%] border-[1px] border-black grid place-content-center">
        <img src={Rider} alt="Rider" height={500} width={500} />
      </div>
      <div className="authDisplay h-[100%] w-[50%] border-[1px] border-red-500 grid place-content-center">
        <Outlet />
      </div>
    </section>
  );
}

export default Authentication;
