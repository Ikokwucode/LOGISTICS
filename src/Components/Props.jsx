import React from "react";

function Props({ image, title, text }) {
  return (
    <div className=" bg-gradient-to-b from-white rounded-xl to-[#F9C799] h-[79vh] w-[24vw] flex flex-col items-center justify-center">
      <div className="h-[37vh] w-[18vw]">
        <img src={image} className="h-[38vh] " />
      </div>
      <div className="h-[170px] w-[250px]">
        <p className="text-[19px] font-semibold text-[#3A3A3A] h-[6vh]">
          {title}
        </p>
        <p className="text-[#3A3A3A] text-sm w-[18vw]">{text}</p>
      </div>
    </div>
  );
}

export default Props;
