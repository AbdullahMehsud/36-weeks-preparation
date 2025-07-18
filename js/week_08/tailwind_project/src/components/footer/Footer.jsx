import React from "react";
import envelop from "../../assets/envelope-outline.svg";
import paperPlan from "../../assets/paper-plane-svgrepo-com.svg";
import sofa from "../../assets/sofa.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
  return (
    <div className="w-full bg-white py-20 relative">
      <div className="flex px-20">
        <form action="">
          <h1 className=" flex items-center gap-2 text-green-950 text-xl">
            <img src={envelop} alt="Envelope Icon" className="w-7 h-7" />
            Subscribe to Newsletter
          </h1>
          <div className="flex gap-3 mt-2">
            <input
              type="text"
              className=" border border-gray-400  bg-white px-3 rounded-lg"
              placeholder="Enter your name"
            />
            <input
              type="text"
              className=" border border-gray-400 bg-white px-3 rounded-lg"
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
      <div className="px-20 mt-10">
        <h1 className="text-3xl font-medium text-[#3b5d50]">Furni.</h1>
      </div>
      <div className="grid grid-cols-6 px-20 py-5 gap-10">
        <p className="text-[#6c757d] col-span-2 pr-2 leading-7">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant
        </p>
        <ul className=" space-y-3">
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <ul className=" space-y-3">
          <li>Support</li>
          <li>Knowledge base</li>
          <li>Live chat</li>
        </ul>
        <ul className=" space-y-3">
          <li>Jobs</li>
          <li>Our team</li>
          <li>Leadership</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="space-y-3">
          <li>Nordic Chair</li>
          <li>Kurzo Aero</li>
          <li>Ergonomic Chair</li>
        </ul>
      </div>
      <div className="px-20 flex gap-2">
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
      <div className="px-20 py-10 space-y-8">
      <div className="border border-gray-200"></div>
      <div className="flex">
      <p>Copyright ©2025. All Rights Reserved. — Designed with love by Untree.co</p>
      <p className="ml-auto">Terms & Conditions</p>
      <p className="ml-3">Privacy Policy</p>
      </div>
      </div>
    </div>
  );
}

export default Footer;
