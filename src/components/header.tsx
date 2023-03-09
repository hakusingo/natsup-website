import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-4 h-[80px] flex justify-between items-center">
        <div>
          <div className='w-[28px] h-[1px] bg-main-gold'></div>
          <div className='my-2 w-[28px] h-[1px] bg-main-gold'></div>
          <div className='w-[28px] h-[1px] bg-main-gold'></div>
        </div>
        <h1>
          <Link href="/">
            <img className='w-[80px] h-auto' src="/header/header-logo.svg" alt="natsup-logo" />
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
