import React from "react";
import Container from "../container/Container";
import couch from "../../assets/couch.png";
import dotsLight from "../../assets/dots-light.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
function Header() {
  return (
    <header className="">
      <Container>
        <nav className="bg-[#3b5d50] p-4 grid grid-cols-3 text-white">
          <div className="mr-auto font-bold px-24 text-2xl col-span-1">
            <a href="">
              Furni<span className="text-gray-400">.</span>
            </a>
          </div>
          <ul className="flex font-medium gap-10 justify-end text-xs cursor-pointer px-20 col-span-2 mt-2">
            <li className="border-b-4 border-amber-400">Home</li>

            {["Shop", "About us", "Services", "Blog", "Contact us"].map(
              (item) => (
                <li
                  key={item}
                  className="relative opacity-40 hover:opacity-100  group pb-3"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </li>
              )
            )}
            <li className="">
              <img src={user} alt="" className="w-5 h-5" />
            </li>
            <li className="">
              <img src={cart} alt="" className="w-5 h-5" />
            </li>
          </ul>
        </nav>
        <div className="bg-[#3b5d50] w-full h-[28rem]">
          <div className="grid grid-cols-2">
            <div className="px-28 py-20 ">
              <h1 className="mb-5 leading-14 font-bold text-5xl text-white font-sans">
                Modern Interior <span>Design Studio</span>
              </h1>
              <span className=" text-neutral-300 text-xs">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </span>
              <div className="flex gap-2 mt-4">
                <button className="bg-amber-400 rounded-4xl px-4 py-2 cursor-pointer hover:bg-amber-300">
                  Shop Now
                </button>
                <button className="bg-[#3b5d50] border border-white text-white rounded-4xl px-5 py-2 cursor-pointer hover:bg-[#2f5144]">
                  Explore
                </button>
              </div>
            </div>
            <div className="relative py-8">
              <img
                className="right-10 mt-5 absolute h-48 w-52"
                src={dotsLight}
                alt=""
              />
              <img
                className="absolute right-20 mb-10 w-full"
                src={couch}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
