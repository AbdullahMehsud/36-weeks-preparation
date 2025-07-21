import React, { useState } from "react";
import Container from "../container/Container";
import couch from "../../assets/couch.png";
import dotsLight from "../../assets/dots-light.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import { Link, useLocation, useNavigate } from "react-router";
function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isShop = location.pathname === "/shop";
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Shop",
      slug: "/shop",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Services",
      slug: "/services",
    },
    {
      name: "Blog",
      slug: "/blogs",
    },
    {
      name: "Contect Us",
      slug: "/contect-us",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pageName = [
    {
      name: "Contact",
      slug: "/contact-us",
    },
    {
      name: "About Us",
      slug: "/about-us",
    },
    {
      name: "Services",
      slug: "/services",
    },
    {
      name: "Blog",
      slug: "/blogs",
    },
  ];

  return (
    <header className="">
      <Container>
        <nav className="bg-[#3b5d50] p-4 grid grid-cols-2 md:grid-cols-3 text-white">
          <div className="mr-auto font-bold md:px-24 md:text-2xl text-4xl col-span-1">
            <Link to="/">
              Furni<span className="text-gray-400">.</span>
            </Link>
            <button
              className="cursor-pointer"
              onClick={() => navigate("/")}
            ></button>
          </div>
          <div className="md:hidden absolute right-6 top-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex font-medium gap-10 justify-end text-xs cursor-pointer md:px-20 col-span-2 mt-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.slug;
              return (
                <li
                  key={item.name}
                  className={`relative group pb-3 ${
                    isActive
                      ? "opacity-100 border-b-4 border-amber-400"
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <button
                    className="cursor-pointer"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                  <span
                    className={`${
                      isActive
                        ? ""
                        : "absolute bottom-0 left-0 h-1 w-full bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    }`}
                  ></span>
                </li>
              );
            })}
            <li className="" >
              <img src={user} alt="user icon" className="w-5 h-5" />
            </li>
            <li className="">
              <img src={cart} alt="cart icon" className="w-5 h-5" onClick={() => navigate("/cart")} />
            </li>
          </ul>
        </nav>
        {isMobileMenuOpen && (
          <ul className="flex flex-col gap-4 px-6 py-2 pb-4 bg-[#3b5d50] text-white md:hidden transition-all duration-1000">
            {navItems.map((item) => {
              const isActive = location.pathname === item.slug;
              return (
                <li
                  key={item.name}
                  className={`${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-2"
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
            <div className="flex">
              <li>
                <img src={user} alt="user icon" className={`w-5 h-5 mr-2 `} />
              </li>
              <li>
                <img src={cart} alt="cart icon" className={"w-5 h-5 mr-2"} />
              </li>
            </div>
          </ul>
        )}
        <div className="border-b border-gray-400 md:hidden"></div>
        <div
          className={`bg-[#3b5d50] w-full ${
            isShop ? "md:h-[20rem] h-[5rem]" : "md:h-[28rem] h-[56rem]"
          } `}
        >
          {isShop ? (
            <h1 className="font-bold md:px-28 md:py-28 md:text-5xl text-3xl px-3 text-white font-sans">
              Shop
            </h1>
          ) : (
            <div className="flex flex-col md:grid md:grid-cols-2">
              <div className="md:px-28 px-5 md:py-20 ">
                <h1 className="mb-5 md:leading-14 font-bold md:text-5xl text-3xl text-white font-sans md:mt-0 mt-2">
                  {(() => {
                    const currentPage = pageName.find(
                      (page) => page.slug === location.pathname
                    );
                    return currentPage ? (
                      currentPage.name
                    ) : (
                      <>
                        Modern Interior <span>Design Studio</span>
                      </>
                    );
                  })()}
                </h1>
                <span className=" text-neutral-300 text-sm  md:text-xs">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </span>
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-amber-400 rounded-3xl px-4 py-2 cursor-pointer hover:bg-amber-300"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </button>
                  <button className="bg-[#3b5d50] border border-white text-white rounded-3xl px-5 py-2 cursor-pointer hover:bg-[#2f5144]">
                    Explore
                  </button>
                </div>
              </div>
              <div className="md:relative py-8">
                <img
                  className="md:right-10 md:left-auto left-60 md:mt-5 absolute md:h-48 md:w-52"
                  src={dotsLight}
                  alt=""
                />
                <img
                  className="absolute md:right-20 md:left-auto left-0 md:mb-10 max-w-3xl h-[600px] md:h-auto md:w-full"
                  src={couch}
                  alt=""
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Header;
