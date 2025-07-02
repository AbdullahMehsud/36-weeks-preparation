import React from 'react'
import Container from '../container/Container'
import couch from '../../assets/couch.png'
import dotsLight from '../../assets/dots-light.svg'
function Header() {
  return (
    <header className=''>
        <Container>
        <nav className='bg-[#3b5d50] p-4 grid grid-cols-2 text-white'>
            <div className='mr-auto font-bold px-20 text-2xl'><a href="">Furni<span className='text-gray-400'>.</span></a></div>
            <ul className='flex gap-6 justify-end cursor-pointer px-20'>
                <li className='hover:text-gray-500'>Home</li>
                <li className='hover:text-gray-500'>Shop</li>
                <li className='hover:text-gray-500'>About us</li>
                <li className='hover:text-gray-500'>Services</li>
                <li className='hover:text-gray-500'>Blog</li>
                <li className='hover:text-gray-500'>Contact us</li>
            </ul>
        </nav>
        <div className='bg-[#3b5d50] w-full h-[28rem]'>
            <div className='grid grid-cols-2 py-20 px-24'>
                <div className='px-2 w-[calc(100%-8rem)]'>
                    <h1 className='mb-5 font-bold text-5xl text-white'>Modern Interior <span>Design Studio</span></h1>
                    <span className=' text-neutral-300 text-xs'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</span>
                    <div className='flex gap-2 mt-4'>
                        <button className='bg-amber-400 rounded-4xl px-4 py-2 cursor-pointer hover:bg-amber-300'>Shop Now</button>
                        <button className='bg-[#3b5d50] border border-white text-white rounded-4xl px-5 py-2 cursor-pointer hover:bg-[#2f5144]'>Explore</button>
                    </div>
                </div>
                <div className='relative '>
                    <img className='right-3 absolute' src={dotsLight} alt="" />
                    <img className='absolute right-20 w-full' src={couch} alt="" />
                </div>
            </div>
        </div>
        </Container>
    </header>
  )
}

export default Header