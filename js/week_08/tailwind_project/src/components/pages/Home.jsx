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
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import Testimonials from "../Testimonials";
import post1 from "../../assets/post-1.jpg";
import post2 from "../../assets/post-2.jpg";
import post3 from "../../assets/post-3.jpg";
import Product from "../Product";
function Home() {
  const products = [
    {
      image: product1,
      title: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      url: "Read More",
    },
    {
      image: product2,
      title: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      url: "Read More",
    },
    {
      image: product3,
      title: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
      url: "Read More",
    },
  ];
  const blogs = [
    {
      image: post1,
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: "Dec 19, 2021",
    },
    {
      image: post2,
      title: "How To Keep Your Furniture Clean",
      author: "Robert Fox on",
      date: "Dec 15, 2021", 
    },
    {
      image: post3,
      title: "Small Space Furniture Apartment Ideas",
      author: "Kristin Watson on",
      date: "Dec 12, 2021",
    },
  ];
  return (
    <>
    <Product/>
      <div className="mt-24 md:px-28">
        <div className="md:grid md:grid-cols-2 flex flex-col justify-between">
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
              className="absolute md:left-6 -left-24 md:-top-6 -top-0 md:h-48 md:w-52"
              src={dotsYellow}
              alt=""
            />
            <img
              className="absolute md:left-28 md:-bottom-36 top-20 md:top-auto md:px-0 px-4 rounded-4xl md:rounded-2xl md:w-md"
              src={whyChooseUs}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-96 px-6 h-auto">
        <div className="md:grid md:grid-cols-2 flex flex-col justify-between">
          <div className="relative">
            <img
              className="absolute md:left-3 -left-28 md:-top-20 top-56 md:h-48 md:w-52"
              src={dotsGreen}
              alt=""
            />
            <img
              className="absolute -left-2 md:left-24 md:top-auto top-72 rounded-2xl w-60 md:w-96"
              src={image1}
              alt=""
            />
            <img
              className="absolute md:-right-20 right-4 md:top-0 top-60 rounded-2xl w-24 md:w-48"
              src={image2}
              alt=""
            />
            <img
              className="absolute md:-right-20 right-0 md:top-52 top-96 rounded-2xl w-48 md:w-80 "
              src={image3}
              alt=""
            />
          </div>
          <div className="md:pl-30 md:mt-0 mt-[650px]">
            <h1 className="font-medium text-2xl md:text-3xl md:pr-10">
              We Help You Make Modern Interior Design
            </h1>
            <p className="mt-4 text-[#6c757d] text-xs md:pr-16 leading-5">
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
      <div className="md:mt-96 mt-40 flex justify-center">
        <div className="md:grid md:grid-cols-3 flex flex-col md:px-20 md:gap-2 gap-10 px-8">
          {products.map((product, index) => (
            <div className="flex gap-4 relative" key={index}>
              <div className=" rounded-3xl bg-[#DCE5E4] w-40 h-24 flex items-center justify-center"></div>
              <div className="absolute -left-3 -top-2">
                <img
                  src={product?.image}
                  alt=""
                  className="w-32 h-28 object-contain"
                />
              </div>
              <div className="max-w-xs">
                <h3 className="text-lg font-semibold">Nordic Chair</h3>
                <p className="text-sm text-gray-600">{product.title}</p>
                <p className="text-sm text-gray-500 hover:text-gray-400 font-medium mt-1 cursor-pointer">
                  {product.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
      <div className="w-full pb-40 md:px-20 px-4">
        <div className="flex flex-col md:flex-row md:flex md:justify-between">
          <h2 className="font-semibold text-3xl">Recent Blog</h2>
          <p className="text-sm font-medium underline hover:cursor-pointer">
            View All Posts
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:flex gap-6 mt-14">
          {blogs.map((blog, index) => (
            <div key={index}>
              <img src={blog.image} alt="" className="w-96 rounded-3xl hover:opacity-70 cursor-pointer duration-500" />
              <h2 className="text-lg mt-3 px-2 font-medium">{blog.title}</h2>
              <h2 className="text-md px-2 font-medium">
                <span className="text-gray-500">by </span>
                {blog.author} <span className="text-gray-500">on</span>{" "}
                {blog.date}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
