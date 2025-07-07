import dotsYellow from "../../assets/dots-yellow.svg";
import dotsGreen from "../../assets/dots-green.svg";
import whyChooseUs from "../../assets/why-choose-us-img.jpg";
import support from "../../assets/support.svg";
import truck from "../../assets/truck.svg";
import bag from "../../assets/bag.svg";
import returnSvg from "../../assets/return.svg";
import image1 from "../../assets/img-grid-1.jpg";
import image2 from "../../assets/img-grid-2.jpg";
import image3 from "../../assets/img-grid-3.jpg";
import product1 from "../../assets/product-1.png";
function Home() {
  return (
    <>
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
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="gap-2">
                <div className="relative inline-block">
                  <img src={bag} alt="" className="relative z-10" />
                  <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
                </div>
                <h3 className="text-xs mb-1">Easy to Shop</h3>
                <p className="text-[#6c757d] text-xs pr-14">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
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
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="gap-2">
                <div className="relative inline-block">
                  <img src={returnSvg} alt="" className="relative z-10" />
                  <span className="bg-[#3b5d5033] w-8 h-8 absolute left-10 -translate-x-5 top-3 rounded-full inline-block z-0"></span>
                </div>
                <h3 className="text-xs mb-1">Hassle Free Returns</h3>
                <p className="text-[#6c757d] text-xs pr-14">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="absolute left-6 -top-8 h-48 w-52"
              src={dotsYellow}
              alt=""
            />
            <img
              className="absolute left-28 -bottom-36 rounded-2xl w-md"
              src={whyChooseUs}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-96 px-6 h-auto">
        <div className="grid grid-cols-2 justify-between">
          <div className="relative">
            <img
              className="absolute left-3 -top-20 h-48 w-52"
              src={dotsGreen}
              alt=""
            />
            <img
              className="absolute left-24  rounded-2xl w-96"
              src={image1}
              alt=""
            />
            <img
              className="absolute -right-20 top-0 rounded-2xl w-48"
              src={image2}
              alt=""
            />
            <img
              className="absolute -right-20 top-52 rounded-2xl w-80 "
              src={image3}
              alt=""
            />
          </div>
          <div className="pl-30">
            <h1 className="font-medium text-3xl pr-10">
              We Help You Make Modern Interior Design
            </h1>
            <p className="mt-4 text-[#6c757d] text-xs pr-16 leading-5">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <div className="py-4">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#6c757d] text-xs list-disc ">
                <li className="pr-12">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="pr-12">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="pr-12">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="pr-12">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
              </ul>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="bg-[#212121] hover:bg-black border border-white text-white rounded-4xl px-5 py-2 cursor-pointer ">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
     <div className="mt-96 flex justify-center">
  <div className="grid grid-cols-3 px-20 gap-2">
    <div className="flex gap-4">
      <div className="rounded-3xl bg-[#DCE5E4] w-24 h-24 flex items-center justify-center overflow-hidden">
        <img src={product1} alt="" className="w-20 h-auto object-contain" />
      </div>
      <div className="max-w-xs">
        <h3 className="text-lg font-semibold">Nordic Chair</h3>
        <p className="text-sm text-gray-600">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
        </p>
        <p className="text-sm text-green-800 font-medium mt-1 cursor-pointer hover:underline">
          Read More
        </p>
      </div>
    </div>
    <div className="flex gap-4">
      <div className="rounded-3xl bg-[#DCE5E4] w-24 h-24 flex items-center justify-center overflow-hidden">
        <img src={product1} alt="" className="w-20 h-auto object-contain" />
      </div>
      <div className="max-w-xs">
        <h3 className="text-lg font-semibold">Nordic Chair</h3>
        <p className="text-sm text-gray-600">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
        </p>
        <p className="text-sm text-green-800 font-medium mt-1 cursor-pointer hover:underline">
          Read More
        </p>
      </div>
    </div>
    <div className="flex gap-4">
      <div className="rounded-3xl bg-[#DCE5E4] w-24 h-24 flex items-center justify-center overflow-hidden">
        <img src={product1} alt="" className="w-20 h-auto object-contain" />
      </div>
      <div className="max-w-xs">
        <h3 className="text-lg font-semibold">Nordic Chair</h3>
        <p className="text-sm text-gray-600">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
        </p>
        <p className="text-sm text-green-800 font-medium mt-1 cursor-pointer hover:underline">
          Read More
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
