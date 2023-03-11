import React from 'react'
import Image from 'next/image'

type HeroProps = {
  heroData: HeroData;
};

const Hero = ({ heroData }: HeroProps) => {
  return (
    <div className='px-4 container mx-auto'>
      <div className="mt-20 pl-4">
        <h2 className='text-[28px] font-thin text-main-gold'>
          {heroData.pageName}
        </h2>
        <hr className='h-[2px] w-[100px] pl-8 bg-main-gold ml-6' />
      </div>
      <div className="mt-12">
        <p className='text-center text-[14px] text-main-gold tracking-widest font-mill'>{heroData.pageTitle}</p>
        <Image
          className='mt-4'
          src={heroData.imagePath}
          alt={heroData.pageName}
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default Hero
