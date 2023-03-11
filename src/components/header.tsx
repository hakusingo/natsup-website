import Link from 'next/link'
import React, { useRef, ReactNode } from 'react'
import MenuOpen from './menuOpen'


type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};


const Header: React.FC<HeaderProps> = (props) => {
  const menuOpen = props.menuOpen
  const setMenuOpen = props.setMenuOpen
  const menuBtn = useRef(null)
  const menuBtnClick = () => {
    props.setMenuOpen(!props.menuOpen)
  }

  return (
    <header className='sticky top-0'>
      <div ref={menuBtn} className="container mx-auto px-4 h-[80px] flex justify-between items-center">
        <div onClick={menuBtnClick} role="button" tabIndex={0} className='relative z-30 transition duration-300'>
          <div className={`w-[28px] h-[1px] bg-main-gold ${props.menuOpen || "bg-white rotate-45 origin-top-left"}`}></div>
          <div className={`my-2 w-[28px] h-[1px] bg-main-gold ${props.menuOpen || "opacity-0 invisible"}`}></div>
          <div className={`w-[28px] h-[1px] bg-main-gold ${props.menuOpen || "bg-white -rotate-45 origin-bottom-left"}`}></div>
        </div>
        <h1>
          <Link href="/">
            <img className='w-[80px] h-auto' src="/header/header-logo.svg" alt="natsup-logo" />
          </Link>
        </h1>
      </div>
      <MenuOpen menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  )
}

export default Header
