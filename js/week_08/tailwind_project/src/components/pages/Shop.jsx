import product1 from "../../assets/product-1.png";
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
function Shop() {
  return (
    <div className="w-full">
      <div className="md:grid md:grid-cols-4 flex flex-col md:mb-0 mb-30 py-28 px-20 space-y-14">
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product3} alt="" />
          <h3 className="font-semibold mt-5">Nordic Chair</h3>
          <strong>$50.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product1} alt="" />
          <h3 className="font-semibold mt-5">Nordic Chair</h3>
          <strong>$50.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product2} alt="" />
          <h3 className="font-semibold mt-5">Kurzo Aero Chair</h3>
          <strong>$78.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product3} alt="" />
          <h3 className="font-semibold mt-5">Ergonomic Chair</h3>
          <strong>$43.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product3} alt="" />
          <h3 className="font-semibold mt-5">Nordic Chair</h3>
          <strong>$50.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-72">
          <img src={product1} alt="" />
          <h3 className="font-semibold mt-5">Nordic Chair</h3>
          <strong>$50.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-64">
          <img src={product2} alt="" />
          <h3 className="font-semibold mt-5">Kurzo Aero Chair</h3>
          <strong>$78.00</strong>
        </div>
        <div className="flex flex-col justify-center items-center w-64">
          <img src={product3} alt="" />
          <h3 className="font-semibold mt-5">Ergonomic Chair</h3>
          <strong>$43.00</strong>
        </div>
      </div>
    </div>
  );
}

export default Shop;
