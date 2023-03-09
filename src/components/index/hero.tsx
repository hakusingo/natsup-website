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
    </div>
  )
}

export default Hero
