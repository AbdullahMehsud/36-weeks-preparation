import React from "react";
import Testimonials from "../Testimonials";
import Product from "../Product";
import support from "../../assets/support.svg";
import truck from "../../assets/truck.svg";
import bag from "../../assets/bag.svg";
import returnSvg from "../../assets/return.svg";
function Services() {
  return (
    <>
      <div className="mt-24 px-24">
        <div className="flex justify-between">
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={truck} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>

            <h3 className="text-xs mb-1">Fast & Free Shipping</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={bag} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">Easy to Shop</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={support} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">24/7 Support</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={returnSvg} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">Hassle Free Returns</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-20">
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={truck} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>

            <h3 className="text-xs mb-1">Fast & Free Shipping</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={bag} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">Easy to Shop</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={support} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">24/7 Support</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
          <div className="gap-2">
            <div className="relative inline-block">
              <img src={returnSvg} alt="" className="relative z-10" />
              <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
            </div>
            <h3 className="text-xs mb-1">Hassle Free Returns</h3>
            <p className="text-[#6c757d] text-xs pr-14">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        </div>
      </div>
      <Product />
      <Testimonials />
    </>
  );
}

export default Services;
