import React from "react";
import envelop from "../../assets/envelope-outline.svg";
import paperPlan from "../../assets/paper-plane-svgrepo-com.svg";
import sofa from "../../assets/sofa.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
  return (
    <div className="w-full bg-white py-20 relative">
      <div className="flex md:px-20 md:mt-0 mt-28">
        <form action="" className="px-2">
          <h1 className=" flex items-center gap-2 text-green-950 text-xl">
            <img src={envelop} alt="Envelope Icon" className="w-7 h-7" />
            Subscribe to Newsletter
          </h1>
          <div className="md:flex md:flex-row flex flex-col gap-3 mt-2">
            <input
              type="text"
              className=" border border-gray-400 py-3 bg-white px-3 rounded-lg focus:outline-1 focus:outline-green-700 focus:shadow"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className=" border border-gray-400 py-3 bg-white px-3 rounded-lg focus:outline-1 focus:outline-green-700 focus:shadow"
              placeholder="Enter your email"
            />
            <button className="bg-[#3b5d50] cursor-pointer hover:bg-[#314D43] py-4 md:px-8 px-2 rounded-xl w-20 justify-center flex md:flex-auto">
              <img src={paperPlan} className="w-8 h-6" alt="" />
            </button>
          </div>
        </form>
        <div className="md:right-10 right-0 -top-32 absolute">
          <img src={sofa} alt="" className="w-96" />
        </div>
      </div>
      <div className="md:px-20 px-2 mt-10">
        <h1 className="text-3xl font-medium text-[#3b5d50]">Furni.</h1>
      </div>
      <div className="md:grid md:grid-cols-6 flex flex-col md:px-20 px-2 py-5 gap-10">
        <p className="text-[#6c757d] col-span-2 pr-2 leading-7">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant
        </p>

        {/* Mobile Social Icons */}
        <div className="flex gap-3 mt-4 md:hidden">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <div
              key={i}
              className="text-[#314D43] cursor-pointer hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center"
            >
              <Icon size={16} />
            </div>
          ))}
        </div>

        <div className="md:grid md:grid-cols-4 md:col-span-4 grid grid-cols-2 px-2 py-5 gap-10">
          <ul className=" space-y-3 cursor-pointer">
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              About us
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Services
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Blog
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Contact Us
            </li>
          </ul>
          <ul className="cursor-pointer space-y-3">
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Support
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Knowledge base
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Live chat
            </li>
          </ul>
          <ul className="cursor-pointer space-y-3">
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Jobs
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Our team
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Leadership
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Privacy Policy
            </li>
          </ul>
          <ul className="cursor-pointer space-y-3">
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Nordic Chair
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Kurzo Aero
            </li>
            <li className="hover:text-gray-500 text-gray-600 duration-200">
              Ergonomic Chair
            </li>
          </ul>
        </div>
      </div>
      <div className="md:px-20 px-2 md:flex gap-2 md:mt-0 mt-10 hidden">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
            <div
              key={i}
              className="text-[#314D43] cursor-pointer hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center"
            >
              <Icon size={16} />
            </div>
          ))}
      </div>
      <div className="md:px-20 px-2 py-10 space-y-8">
        <div className="border border-gray-200"></div>
        <div className="md:flex  flex flex-col md:flex-row justify-center gap-2 text-gray-600">
          <p>
            Copyright ©2025. All Rights Reserved. — Designed with{" "}
            <span className="block text-center md:inline md:text-left">
              love by Abdullah Mehsud
            </span>
          </p>
          <div className="flex md:ml-auto justify-center gap-8 cursor-pointer hover:text-gray-500">
            <p className="">Terms & Conditions</p>
            <p className="">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
