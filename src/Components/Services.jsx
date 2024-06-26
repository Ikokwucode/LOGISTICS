import React from "react";

// import Button from "./Button";
import pana from "../Images/pana.svg";
import bro from "../Images/bro.svg";
import sis from "../Images/sis.svg";
import truck from "../Images/truck.svg";
import van from "../Images/van.svg";
import bike from "../Images/bike.svg";
import Props from "./Props";
import Tag from "./Tag";

function OurServices() {
  return (
    <main className=" w-screen h-[160vh] flex items-center justify-center  bg-[#ffefdf]">
      <div className=" w-[85vw] h-[150vh] flex flex-col items-center justify-center">
        <div className=" w-[85vw] h-[40px]"></div>

        <section className=" bg-gradient-to-b from-[#ffebda] to-[#fce9d8] h-[80vh]  w-screen flex items-center justify-center flex-col rounded-[40px]">
          <Tag text="Our Services" width={"w-[8vw]"} />
          {/* <Button
            id={"w-[85vw] h-[40px] flex items-center justify-start"}
            text=" Our Services"
          /> */}
          <div className=" w-[85vw] h-[40px]"></div>
          <div className=" w-[85vw] h-[200px] flex items-center justify-between">
            <div className=" w-[19vw] h-[200px] flex items-center justify-center flex-col gap-1">
              <img src={pana} alt="" className=" w-[150px] h-[130px]" />
              <h1 className=" font-bold text-[#3A3A3A]"> Reliable Services</h1>
              <small className=" text-center text-[14px] text-[#8C8C8C] w-[19vw] h-[70px]">
                {" "}
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
        </section>
        <div className=" w-[85vw] h-[80px]"></div>
        <div className=" w-[85vw] h-[510px] flex flex-col items-center justify-center">
          <Tag text="Fleet of Services" width={"w-[5vw]"} />
          {/* <Button
            id={" w-[85vw] h-[40px] flex items-center justify-center"}
            text="Fleet of Services"
          /> */}
          <div className="  flex items-center justify-center w-[85vw] h-[80px]">
            <small className=" text-center text-[14px] w-[35vw] text-[#3A3A3A] flex items-center h-[80px]">
              {" "}
              Versatile transport options to meet all your delivery needs. From
              swift bikes for quick errands to sturdy trucks and vans for larger
              shipments, we
            </small>
          </div>
        </div>
        <section className="flex justify-between w-full">
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
            <div className="bg-[#ffedda] h-[10vh] w-[12.5vw] absolute bottom-[3%] rounded-xl right-[12%]"></div>
            <div className="h-[37vh] w-[18vw] z-50">
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
        </section>
      </div>
    </main>
  );
}

export default OurServices;
