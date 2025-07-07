import dotsYellow from "../../assets/dots-yellow.svg";
import whyChooseUs from "../../assets/why-choose-us-img.jpg";
import support from "../../assets/support.svg";
import truck from "../../assets/truck.svg";
import bag from "../../assets/bag.svg";
import returnSvg from "../../assets/return.svg";
function About() {
  return (
    <div className="mt-24 px-28">
      <div className="grid grid-cols-2 justify-between">
        <div className="px-2">
          <h1 className="font-normal text-3xl">Why choose use</h1>
          <p className="mt-4 text-[#6c757d] text-sm">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="grid grid-cols-2 gap-2 py-4 mt-4">
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
          </div>
          <div className="grid grid-cols-2 gap-2 py-4">
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
        <div className="relative">
          <img className="absolute left-6 -top-8 h-48 w-52" src={dotsYellow} alt="" />
          <img
            className="absolute left-28 -bottom-36 rounded-2xl w-md"
            src={whyChooseUs}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
