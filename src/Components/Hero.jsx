import React from 'react'
const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#219ebc] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>First, flexible financing for GOOGLE, MICROSOFT EDGE, BING.</p>
        </div>
        <p className='md:text-2xl text-xl form-bold text-gray-500 px-5'>Monitor your data analytics to increase revenue for BTB, BTC & SAAS platforms.</p>
        <button className='bg-[#219ebc] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero