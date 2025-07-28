import React, { useState } from "react";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Modern Sofa",
      price: 250,
      quantity: 1,
      image: product1,
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: 120,
      quantity: 1,
      image: product2,
    },
  ]);
  const handleQuantityChange = (id, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1), // prevent going below 1
            }
          : item
      )
    );
  };

  return (
    <>
      <div className="md:px-12 px-4 py-20 overflow-x-auto">
        <table className="min-w-full text-sm ">
          <thead className=" text-center border-b-2 border-black">
            <tr className="text-lg">
              <th className="p-4 font-medium text-black">Image</th>
              <th className="p-4 font-medium text-black">Product</th>
              <th className="p-4 font-medium text-black">Price</th>
              <th className="p-4 font-medium text-black">Quantity</th>
              <th className="p-4 font-medium text-black">Subtotal</th>
              <th className="p-4 font-medium text-black">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 text-center"
              >
                <td className="py-4 px-2 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="md:w-36 md:h-36 w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-4 md:text-lg text-black font-medium">
                  {item.name}
                </td>
                <td className="p-4 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="p-4 text-gray-700">
                  <span
                    className="text-2xl md:px-2 px-1 cursor-pointer"
                    onClick={() => handleQuantityChange(item.id, "dec")}
                  >
                    -
                  </span>
                  <input
                    value={item.quantity}
                    readOnly
                    type="text"
                    className="md:w-12 w-6 h-8 md:h-10 bg-white border text-center focus:outline-1 focus:outline-green-700 focus:shadow"
                    name=""
                    id=""
                  />
                  <span
                    className="text-2xl md:px-2 px-1 cursor-pointer"
                    onClick={() => handleQuantityChange(item.id, "inc")}
                  >
                    +
                  </span>
                </td>
                <td className="p-4 text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4">
                  <button className=" cursor-pointer">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between py-2 md:px-24 px-2 mt-2 mb-40">
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-0 gap-4">
          <div className="">
            <button className="bg-[#212121] hover:bg-black cursor-pointer text-white px-6 py-3 rounded-3xl">
              Update Cart
            </button>
          </div>
          <div>
            <button className="bg-[#212121] hover:bg-black cursor-pointer text-white px-6 py-3 rounded-3xl">
              Continue shopping
            </button>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="font-medium text-2xl">Coupon</h1>
              <p className="text-gray-500">
                Enter your coupon code if you have one.
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-4 mt-2 col-span-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border border-gray-400 py-2 bg-white px-3 rounded-lg focus:outline-1 focus:outline-green-700 focus:shadow w-full md:w-60"
              />
              <button className="bg-[#212121] hover:bg-black cursor-pointer text-white md:px-4 md:py-2 py-4 rounded-3xl md:w-auto w-32 md:mb-0 mb-5">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        <div className="w-72">
  <div className="text-3xl text-left mb-4 pb-5 border-b border-gray-300">
    CART TOTALS
  </div>

  <div className="flex flex-col gap-4 text-sm">
    <div className="flex md:flex-row flex-col justify-between px-2 py-2">
      <span className="text-md">Subtotal</span>
      <span className="text-black font-bold md:py-0 py-2">$230.00</span>
    </div>

    <div className="flex md:flex-row flex-col justify-between px-2 py-2">
      <span className="text-md ">Total</span>
      <span className="text-black font-bold md:py-0 py-2">$230.00</span>
    </div>

    <div className="pt-2">
      <button className="bg-[#212121] hover:bg-black cursor-pointer text-white px-5 py-4 font-bold rounded-4xl text-xl w-full">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

      </div>
    </>
  );
}

export default Cart;
