import React from "react";
import Rider from "/Images/Character.png";
import { Outlet } from "react-router-dom";
function Authentication() {
  return (
    <section className=" h-[100vh] w-[100%] flex bg-lGreen py-4 ">
      <div className="h-full w-[50%]  flex items-center justify-end px-10">
        <img src={Rider} alt="Rider" height={600} width={600} />
      </div>
      <div className="authDisplay h-[100%] w-[50%] flex items-center justify-start  pt-10 ">
        <Outlet />
      </div>
    </section>
  );
}

export default Authentication;
