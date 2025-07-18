import React from "react";
import envelop from "../../assets/envelope-outline.svg";
import paperPlan from "../../assets/paper-plane-svgrepo-com.svg";
import sofa from "../../assets/sofa.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
  return (
    <div className="w-full bg-white py-20 relative">
      <div className="flex md:px-20 md:mt-0 mt-28">
        <form action="">
          <h1 className=" flex items-center gap-2 text-green-950 text-xl">
            <img src={envelop} alt="Envelope Icon" className="w-7 h-7" />
            Subscribe to Newsletter
          </h1>
          <div className="md:flex md:flex-row flex flex-col gap-3 mt-2">
            <input
              type="text"
              className=" border border-gray-400  bg-white px-3 rounded-lg focus:outline-1 focus:outline-green-700 focus:shadow"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className=" border border-gray-400 bg-white px-3 rounded-lg focus:outline-1 focus:outline-green-700 focus:shadow"
              placeholder="Enter your email"
            />
            <button className="bg-[#3b5d50] cursor-pointer hover:bg-[#314D43] py-4 px-8 rounded-xl">
              <img src={paperPlan} className="w-8 h-6" alt="" />
            </button>
          </div>
        </form>
        <div className="right-10 -top-32 absolute">
          <img src={sofa} alt="" className="w-96" />
        </div>
      </div>
      <div className="md:px-20 px-2 mt-10">
        <h1 className="text-3xl font-medium text-[#3b5d50]">Furni.</h1>
      </div>
      <div className="md:grid md:grid-cols-6 md:px-20 px-2 py-5 gap-10">
        <p className="text-[#6c757d] col-span-2 pr-2 leading-7">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant
        </p>
        <ul className=" space-y-3 cursor-pointer">
          <li className="hover:text-gray-500 duration-200">About us</li>
          <li className="hover:text-gray-500 duration-200">Services</li>
          <li className="hover:text-gray-500 duration-200">Blog</li>
          <li className="hover:text-gray-500 duration-200">Contact Us</li>
        </ul>
        <ul className="cursor-pointer space-y-3">
          <li className="hover:text-gray-500 duration-200">Support</li>
          <li className="hover:text-gray-500 duration-200">Knowledge base</li>
          <li className="hover:text-gray-500 duration-200">Live chat</li>
        </ul>
        <ul className="cursor-pointer space-y-3">
          <li className="hover:text-gray-500 duration-200">Jobs</li>
          <li className="hover:text-gray-500 duration-200">Our team</li>
          <li className="hover:text-gray-500 duration-200">Leadership</li>
          <li className="hover:text-gray-500 duration-200">Privacy Policy</li>
        </ul>
        <ul className="cursor-pointer space-y-3">
          <li className="hover:text-gray-500 duration-200">Nordic Chair</li>
          <li className="hover:text-gray-500 duration-200">Kurzo Aero</li>
          <li className="hover:text-gray-500 duration-200">Ergonomic Chair</li>
        </ul>
      </div>
      <div className="md:px-20 px-2 flex gap-2">
        <div className="text-[#314D43] cursor-pointer  hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center">
          <Facebook size={16}/>
        </div>
        <div className="text-[#314D43] cursor-pointer  hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center">
          <Twitter size={16}/>
        </div>
        <div className="text-[#314D43] cursor-pointer  hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center">
          <Instagram size={16} />
        </div>
        <div className="text-[#314D43] cursor-pointer  hover:text-white hover:bg-[#314d43] bg-[#c6dad2] rounded-full w-10 h-10 flex justify-center items-center">
          <Linkedin size={16} />
        </div>
      </div>
      <div className="md:px-20 px-2 py-10 space-y-8">
      <div className="border border-gray-200"></div>
      <div className="md:flex  flex flex-col md:flex-row justify-center">
      <p>Copyright ©2025. All Rights Reserved. — Designed with love by Abdullah Mehsud</p>
      <p className="md:ml-auto">Terms & Conditions</p>
      <p className="md:ml-3">Privacy Policy</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
