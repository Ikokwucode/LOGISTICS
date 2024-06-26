import React from "react";
import aboutimg from "/Images/about1.png";
import aboutimg2 from "/Images/about2.png";
import aboutimg3 from "/Images/about3.png";
import abouting4 from "/Images/Removeby1.png";
import abouting5 from "/Images/Removeby2.png";
import abouting6 from "/Images/Removeby3.png";
import abouting7 from "/Images/Removeby4.png";
import abouting8 from "/Images/Removeby5.png";
import abouting9 from "/Images/Eight.png";
import abouting10 from "/Images/transport.png";
import abouting12 from "/Images/express-logo-designs-transport-logistic-delivery-vector-49000454 1.png";

import abouting11 from "/Images/Removeby8.png";

function About() {
  return (
    <div>
      <section className="w-auto  shadow-lg bg-white flex items-center justify-around">
        {/* <div className="flex items-center justify-between w-[100%] h-[12vh) "></div> */}
        <nav className="flex items-center justify-between w-[100%] h-[12vh] px-10">
          <img src={abouting4} className="inline h-[4em]" alt="" />
          <img src={abouting5} className="inline h-[5.1em]" alt="" />
          <img src={abouting6} className="inline h-[5em]" alt="" />
          <img src={abouting7} className="inline h-[6.1em]" alt="" />
          <img src={abouting8} className="inline h-[2em]" alt="" />
          <img src={abouting9} className="inline h-[5em]" alt="" />
          <img src={abouting10} className="inline h-[5em]" alt="" />
          <img src={abouting11} className="inline h-[3em]" alt="" />
          <img src={abouting12} className="inline h-[3em]" alt="" />
        </nav>
      </section>
      <main className="w-[100%] h-[80vh] bg-blue-200 gap-[2cm] flex items-center justify-around">
        <div className="flex flex-col gap-6 w-[40%]">
          <b className="font-sans font-semibold text-3xl">About Us</b>
          <small className="font-sans font-medium text-base">
            At Hassie Free We're committed to making your life easier with our
            fast and reliable delivery service. whether you need groceries,
            household items, or the latest gadgets, our dedicated team ensures
            you get what you need when you need it
          </small>
          <button className="w-[14vw] h-[8vh] bg-orange-600 rounded-lg text-white">
            Learn More
          </button>
        </div>
        {/* */}
        <div className="flex items-center w-[45%] relative">
          <ul className="right-[63%] z-10 top-[20%] absolute gap-12">
            <img src={aboutimg3} className="inline w-[100%] " alt="" />
          </ul>
          <ul className="absolute left-[20%] mb-[30%]">
            <img src={aboutimg} className="inline  w-[100%]" alt="" />
          </ul>
          <ul className="top-[20%] absolute left-[35%]">
            <img src={aboutimg2} className="inline w-[100%]" alt="" />
          </ul>
        </div>
      </main>
    </div>
  );
}
export default About;
