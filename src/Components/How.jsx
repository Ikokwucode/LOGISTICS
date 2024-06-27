import React from "react";
import Tag from "./Tag";

const dataList = [
  {
    key: 1,
    title: " 1. Select Plan",
    paragraph:
      "Choose the delivery plan that best suits your needs. Whether you're a one-time user, a regular cutomer, or need premium insurance for valuable items, we have a plan for you.",
  },
  {
    key: 2,
    title: "2. Search for a Logistics Company",
    paragraph:
      "Enter your location and browse through available logistics companies in your area. Find the perfect match based on your delivery requirements and preferences.",
  },
  {
    key: 3,
    title: "3. Set Pickup and Drop-off Locations",
    paragraph:
      "Specify where your package needs to be picked up and the drop-off destination. Our platform makes it easy to input precise addresses,ensuring accurate and timely deliveries.",
  },
  {
    key: 4,
    title: "4. Sit Back and Relax",
    paragraph:
      "Once your order is placed, our efficient fleet and reliable partners will handle the rest. Track your delivery in real-time and enjoy swift, secure service right to your doorstep.",
  },
];

const DataList = () => {
  return (
    <main
      id="how"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#F9C799]  h-[98vh] w-[100%] flex flex-col items-center font-Nunito"
    >
      <div className="h-[20%] w-full px-4 flex justify-start items-center mt-4 pl-10">
        <Tag text={"How it works"} />
      </div>
      <div className="data-list text-sm flex items-center justify-center gap-x-[90px] flex-wrap h-[80%] w-[75%] m-auto ">
        {dataList.map((item) => (
          <div
            key={item.key}
            className="data-item m-[10px] p-[15px] bg-gray-50 rounded-xl flex flex-col w-[22vw] h-[33vh] gap-y-3"
          >
            <h3 className="font-bold text-center">{item.title}</h3>
            <p className="text-center leading-loose ">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DataList;
