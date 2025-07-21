import React from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
function Contact() {
  return (
   <>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 md:px-56 px-4 py-20">
        <div className="flex items-center gap-4">
          <div className="bg-[#3B5D50] w-12 h-12 rounded flex items-center justify-center">
            <MapPin className="text-white" />
          </div>
          <p className="text-sm text-gray-600 w-40">
            43 Raymouth Rd. Baltemoer, London 3910
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#3B5D50] w-12 h-12 rounded flex items-center justify-center">
            <Mail className="text-white" />
          </div>
          <p className="text-sm text-gray-600">info@yourdomain.com</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#3B5D50] w-12 h-12 rounded flex items-center justify-center">
            <Phone className="text-white" />
          </div>
          <p className="text-sm text-gray-600">+1 294 3925 3939</p>
        </div>
      </div>

      <div className="flex justify-start md:px-52 px-4 mb-52 w-full">
        <form className="w-full">
          <div className="flex flex-row md:gap-6 gap-2">
            <div className="flex flex-col md:w-full w-1/2">
              <label className="py-1">Name</label>
              <input
                type="text"
                className="border border-gray-400 bg-white px-4 py-3 rounded-lg focus:outline-green-700 focus:shadow"
              />
            </div>
            <div className="flex flex-col md:w-full w-1/2">
              <label className="py-1">Last Name</label>
              <input
                type="text"
                className="border border-gray-400 bg-white px-4 py-3 rounded-lg focus:outline-green-700 focus:shadow"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="py-1">Email</label>
            <input
              type="email"
              className="border border-gray-400 bg-white px-4 py-3 rounded-lg focus:outline-green-700 focus:shadow"
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="py-1">Message</label>
            <textarea
              className="border border-gray-400 bg-white px-4 py-3 rounded-lg focus:outline-green-700 focus:shadow"
              rows={5}
            ></textarea>
          </div>
          <button className="bg-[#2f2f2f] text-white rounded-3xl px-8 py-3 mt-10 hover:bg-black">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
