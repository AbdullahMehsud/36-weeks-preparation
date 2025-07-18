import React from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
function Contact() {
  return (
    <>
      <div className="flex justify-center  py-20 gap-10">
        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#3B5D50] w-12 h-12 rounded  flex items-center justify-center">
            <MapPin className="text-white" />
          </div>
          <p className="">43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#3B5D50] w-12 h-12 rounded  flex items-center justify-center">
            <MapPin className="text-white" />
          </div>
          <p>+1 294 3925 3939</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#3B5D50] w-12 h-12 rounded  flex items-center justify-center">
            <Mail className="text-white" />
          </div>
          <p>info@yourdomain.com</p>
        </div>
      </div>
      <div className="flex justify-start px-52 mb-52 w-4/5">
        <form action="">
          <div className="flex mt-2 w-full gap-6">
            <div>
              <label className="py-1" htmlFor="">Name</label>
              <input
                type="text"
                className=" border border-gray-400  bg-white w-96 px-4 py-3 rounded-lg "
              />
            </div>
            <div>
              <label className="py-1" htmlFor="">Last Name</label>
              <input
                type="text"
                className=" border border-gray-400  bg-white w-96 px-4 py-3 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="py-1" htmlFor="">Email</label>
            <input
              type="text"
              className=" border border-gray-400  bg-white w-full px-4 py-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-1" htmlFor="">Message</label>
            <textarea
              type="text"
              className=" border border-gray-400  bg-white w-full px-4 py-3 rounded-lg"
              name=""
              id=""
            ></textarea>
          </div>
            <button className="bg-[#2f2f2f] text-white rounded-3xl px-8 py-3 mt-10 cursor-pointer hover:bg-black">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
