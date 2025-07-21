import React from "react";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Modern Sofa",
      price: 250,
      quantity: 2,
      image: product1,
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: 120,
      quantity: 1,
      image: product2,
    },
  ];
  return (
    <>
      <div className="px-12 py-20 overflow-x-auto">
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
                    className="w-36 h-36 object-cover rounded"
                  />
                </td>
                <td className="p-4 text-lg text-black font-medium">
                  {item.name}
                </td>
                <td className="p-4 text-gray-700">${item.price.toFixed(2)}</td>
                <td className="p-4 text-gray-700">{item.quantity}</td>
                <td className="p-4 text-gray-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4">
                  <button className="text-red-500 hover:underline">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between px-10 py-5 mb-96">
        <div className="flex flex-row gap-5">
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Update Cart
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Continue shopping
          </button>
        </div>
        <div>
          <table className="min-w-full text-sm">
            <caption className="text-xl font-semibold mb-4 text-left border-b border-gray-300">
              Cart Totals
            </caption>
            <tbody>
              <tr className="">
                <td className="py-2 px-2">Subtotal</td>
                <td className="text-black font-bold">$230.00</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Total</td>
                <td className="text-black font-bold">$230.00</td>
              </tr>
              <tr>
                <td className="" colSpan="2">
                 <button className="bg-black text-white px-4 py-4 rounded-3xl">
            Proceed to Checkout
          </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
