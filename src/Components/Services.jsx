import React from "react";

// import Button from "./Button";
import pana from "/Images/pana.svg";
import bro from "/Images/bro.svg";
import sis from "/Images/sis.svg";
import truck from "/Images/truck.svg";
import van from "/Images/van.svg";
import bike from "/Images/bike.svg";
import Props from "./Props";
import Tag from "./Tag";

function OurServices() {
  return (
    <main
      id="services"
      className=" w-[100%] h-[182vh] grid place-content-center  bg-[#ffefdf] font-Nunito py-10 "
    >
      <div className=" w-[85vw] h-[inherit] flex flex-col items-center justify-between  pt-10">
        <div className=" w-[85vw] h-[12vh]  flex items-center justify-start">
          <Tag text="Our Services" width={"w-[9.5vw]"} style={"text-sm"} />
        </div>

        <div className=" bg-gradient-to-b from-[#ffebda] to-[#fce9d8] h-[40vh]   w-full flex items-center justify-center flex-col ">
          <div className=" w-[85vw] h-[40px]"></div>
          <div className=" w-[85vw] h-[200px] flex items-center justify-between">
            <div className=" w-[19vw] h-[200px] flex items-center justify-center flex-col gap-1">
              <img src={pana} alt="" className=" w-[150px] h-[130px]" />
              <h1 className=" font-bold text-[#3A3A3A]"> Reliable Services</h1>
              <small className=" text-center text-[14px] text-[#8C8C8C] w-[19vw] h-[70px]">
                Your trust our priority. Thousands of satisfied customers rely
                on us for timely and secure deliveries
              </small>
            </div>
            <div className=" w-[19vw] h-[200px] flex items-center justify-center flex-col gap-1">
              <img src={bro} alt="" className=" w-[150px] h-[130px]" />
              <h1 className=" font-bold text-[#3A3A3A]"> Fast Delivery </h1>
              <small className=" text-center text-[14px] text-[#8C8C8C] w-[19vw] h-[70px]">
                {" "}
                Get your items in a flash. We deliver within the hour, so you
                can enjoy what you need when you need it.
              </small>
            </div>
            <div className=" w-[19vw] h-[200px] flex items-center justify-center flex-col gap-1">
              <img src={sis} alt="" className=" w-[150px] h-[130px]" />
              <h1 className=" font-bold text-[#3A3A3A]"> Affordable Prices</h1>
              <small className=" text-center text-[14px] text-[#8C8C8C] w-[19vw] h-[70px]">
                {" "}
                Save more on deliveries. Competitive rates without compromise on
                speed or quality.
              </small>
            </div>
          </div>
        </div>

        <div className=" w-[85vw] h-[20vh] flex flex-col items-center justify-center  ">
          <Tag
            text={"Fleet of Services"}
            width={"w-[12vw]"}
            style={"text-sm"}
          />

          <div className="  flex items-center justify-center w-[85vw] h-[80px]">
            <small className=" text-center text-[14px] w-[35vw] text-[#3A3A3A] flex items-center h-[80px]">
              {" "}
              Versatile transport options to meet all your delivery needs. From
              swift bikes for quick errands to sturdy trucks and vans for larger
              shipments, we
            </small>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <Props
            title="Bikes"
            text="Our bikes are equipped with specially designed storage compartments to
        ensure your items are delivered in perfect condition. Whether it's a
        quick grocery run or a secure delivery of electronics, our bikes handle
        it all with unmatched efficiency"
            image={bike}
          />
          <Props
            title="Trucks"
            text="Do you have large items or quantities that Bike capacity cannot accomodate? Our vans and other utility
             vehicles are available at your fingertips for quick pick-up and delivery. 
             With maximum weight of 2500kg, we assure you we will not leave you stranded "
            image={truck}
          />
          <div className=" bg-gradient-to-b from-white rounded-xl to-[#F9C799] h-[79vh] w-[26vw] flex flex-col items-center justify-center">
            <div className="h-[37vh] w-[18vw] z-1">
              <img src={van} className="h-[38vh]" />
            </div>

            <div className="h-[170px] w-[278px]">
              <p className="text-[19px] font-semibold text-[#3A3A3A] h-[6vh]">
                Vans
              </p>
              <p className="text-[#3A3A3A] text-sm w-[20vw]">
                For your large items, our trucks are available to ensure
                inclusion of large items. With truck capacity from 3 Tons to 30
                Tons, we have provided options to meet your delivery
                specifications. This service comes with an optional offering of
                'loaders' to take care of loading and offloading your cargo.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OurServices;
