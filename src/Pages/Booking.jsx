import React from "react";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { RiEBike2Line } from "react-icons/ri";
import { FaShuttleVan } from "react-icons/fa";

function Booking() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [formData, setFormData] = useState({
    fullNamePickup: "",
    pickupAddress: "",
    phoneNumberPickup: "",
    contentCategory: "",
    logisticsCompany: "",
    fullNameDelivery: "",
    deliveryAddress: "",
    phoneNumberDelivery: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    // Implement your form submission logic here
  };

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  return (
    <section className=" flex items-start justify-start h-[200vh] w-[100%] bg-[url(/Images/Rectangle.png)] bg-cover bg-center bg-no-repeat ">
      <div className=" h-[170vh] w-[35vw] flex flex-col items-center justify-between bg-secondary  mt-10 ml-10 rounded-tl-xl rounded-tr-xl pb-[16px]">
        <div className="bg-[#6A3500] h-[12vh] w-[35vw] rounded-tr-xl rounded-tl-xl flex justify-around ">
          <div
            className={`p-4  ${
              selectedIcon === 1 ? " border-b-4 border-primary" : ""
            } cursor-pointer `}
            onClick={() => handleIconClick(1)}
          >
            <RiEBike2Line className="w-10 h-10 text-white" />
            <small className="text-md text-white ml-2">Bike</small>
          </div>
          <div
            className={`p-4  ${
              selectedIcon === 2 ? " border-b-4 border-primary" : ""
            } cursor-pointer`}
            onClick={() => handleIconClick(2)}
          >
            <FaShuttleVan className="w-10 h-10 text-white" />
            <small className="text-md text-white ml-2">Van</small>
          </div>
          <div
            className={`p-4  ${
              selectedIcon === 3 ? "border-b-4 border-primary" : ""
            } cursor-pointer`}
            onClick={() => handleIconClick(3)}
          >
            <FaTruckFast className="w-10 h-10 text-white" />
            <small className="text-md text-white ml-2">Truck</small>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" container mx-auto max-w-lg px-4 pt-8 pb-20 rounded-xl bg-white font-Nunito"
        >
          <div className="flex justify-start gap-4">
            <FaCircle className="text-3xl  text-primary" />

            <h3 className="text-lg font-medium mb-2"> Pick Up Details</h3>
          </div>

          <div className="grid grid-cols-1 gap-4 ">
            <div className="border-l-2 border-gray-600 ml-[12px] px-4 py-8">
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <label
                    htmlFor="fullNamePickup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="fullNamePickup"
                    id="fullNamePickup"
                    placeholder="Enter full name"
                    value={formData.fullNamePickup}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pickupAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pick Up Address:
                  </label>
                  <textarea
                    name="pickupAddress"
                    id="pickupAddress"
                    placeholder="Enter pick up address"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1  pl-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumberPickup"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="phoneNumberPickup"
                    id="phoneNumberPickup"
                    placeholder="Enter phone number"
                    value={formData.phoneNumberPickup}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contentCategory"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content Category:
                  </label>
                  <input
                    type="text"
                    name="contentCategory"
                    id="contentCategory"
                    placeholder="Enter content category"
                    value={formData.contentCategory}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="logisticsCompany"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Logistics Company:
                  </label>
                  <input
                    type="text"
                    name="logisticsCompany"
                    id="logisticsCompany"
                    placeholder="Enter logistics company"
                    value={formData.logisticsCompany}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <h3 className="text-lg font-medium mb-2">
              <div className="flex justify-normal gap-4">
                <FaCircle className="text-3xl mr-2 text-[#040302]" />
                Delivery Details
              </div>
            </h3>
            <div className=" px-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <label
                    htmlFor="fullNameDelivery"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    name="fullNameDelivery"
                    id="fullNameDelivery"
                    placeholder="Enter full name"
                    value={formData.fullNameDelivery}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deliveryAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Delivery Address:
                  </label>
                  <textarea
                    name="deliveryAddress"
                    id="deliveryAddress"
                    placeholder="Enter delivery address"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 pl-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumberDelivery"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="phoneNumberDelivery"
                    id="phoneNumberDelivery"
                    placeholder="Enter phone number"
                    value={formData.phoneNumberDelivery}
                    onChange={handleChange}
                    className="mt-1 pl-2 block w-full h-10 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[200px] flex justify-between">
            <span>Insure this packacge</span>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div class="relative w-11 h-6 bg-gray-200 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="px-6 py-4 rounded-md text-md font-medium bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-10 py-4 rounded-md text-md font-medium bg-primary text-white hover:bg-[#a0635f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Confirm & Pay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Booking;
