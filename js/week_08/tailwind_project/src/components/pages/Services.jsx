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
     <div className="mt-24 px-4 md:px-24">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    {[ 
      { icon: truck, title: "Fast & Free Shipping" },
      { icon: bag, title: "Easy to Shop" },
      { icon: support, title: "24/7 Support" },
      { icon: returnSvg, title: "Hassle Free Returns" },
      { icon: truck, title: "Fast & Free Shipping" },
      { icon: bag, title: "Easy to Shop" },
      { icon: support, title: "24/7 Support" },
      { icon: returnSvg, title: "Hassle Free Returns" }
    ].map((item, index) => (
      <div key={index} className="gap-2">
        <div className="relative inline-block">
          <img src={item.icon} alt={item.title} className="relative z-10" />
          <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
        </div>
        <h3 className="md:text-xs mb-1">{item.title}</h3>
        <p className="text-[#6c757d] md:text-xs pr-4 md:pr-14">
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.
        </p>
      </div>
    ))}
  </div>
</div>

      <Product />
      <Testimonials />
    </>
  );
}

export default Services;
