import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
function Product() {
  return (
    <div className="md:py-10 py-20 md:px-20 ">
      <div className="md:grid md:grid-cols-4 flex flex-col justify-between">
        <div className="px-2">
          <h1 className="font-medium text-2xl ">
            Crafted with excellent material.
          </h1>
          <p className="md:mt-4 mt-6 text-[#6c757d] md:text-sm">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex gap-2 mt-4">
            <button className="bg-[#212121] hover:bg-black border border-white text-white rounded-4xl md:px-5 md:py-2 px-6 py-3 cursor-pointer">
              Explore
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={product1} alt="" />
          <h3 className="font-semibold mt-5">Nordic Chair</h3>
          <strong>$50.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={product2} alt="" />
          <h3 className="font-semibold mt-5">Kruzo Aero Chair</h3>
          <strong>$78.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={product3} alt="" />
          <h3 className="font-semibold mt-5">Ergonomic Chair</h3>
          <strong>$43.00</strong>
        </div>
      </div>
    </div>
  );
}

export default Product;
