import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'
function Product() {
  return (
    <div className="py-20 px-28 ">
        <div className='grid grid-cols-4 justify-between'>
            <div className='px-2'>
                    <h1 className='font-medium text-2xl '>Crafted with excellent material.</h1>
                    <p className='mt-4 text-[#6c757d] text-sm'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                    <div className='flex gap-2 mt-4'>
                        
                        <button className='bg-[#212121] hover:bg-black border border-white text-white rounded-4xl px-5 py-2 cursor-pointer '>Explore</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={product1} alt="" />
                    <h3 className='font-semibold mt-5'>Nordic Chair</h3>
                    <strong>$50.00</strong>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={product2} alt="" />
                    <h3 className='font-semibold mt-5'>Kruzo Aero Chair</h3>
                    <strong>$78.00</strong>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={product3} alt="" />
                    <h3 className='font-semibold mt-5'>Ergonomic Chair</h3>
                    <strong>$43.00</strong>
                </div>
        </div>
    </div>
  )
}

export default Product