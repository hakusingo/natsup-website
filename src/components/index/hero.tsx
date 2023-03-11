import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="">
      <div className='w-[90%]'>
        <Image 
          className='rounded-tr-lg rounded-br-lg'
          src="/index/index-hero.jpg" 
          alt="natsup店内" 
          width={600}
          height={800}
          priority={true}
        />
      </div>
      <div className="container mx-auto">
        <div className="flex pt-6 items-center justify-end pr-[10%]">
          <span className='font-mill text-main-gold text-[18px]'>1</span>
          <div className='flex items-center mx-2'>
            <span className='w-[10px] h-[1.8px] bg-main-gold block mx-[.6px]'></span>
            <span className='w-[10px] h-[1px] bg-main-gold block mx-[.6px]'></span>
            <span className='w-[10px] h-[1px] bg-main-gold block mx-[.6px]'></span>
          </div>
          <span className='font-mill text-main-gold text-[18px]'>3</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
