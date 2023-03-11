import React, { ReactNode } from 'react'
import Link from 'next/link'

type MenuOpenProps = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
};

const MenuOpen: React.FC<MenuOpenProps> = (props) => {
  return (
    <>
      <div className="">
        <div className={`absolute w-[100vw] h-[100vh] top-0 bg-slate-100 opacity-50 ${props.menuOpen && "opacity-0 invisible"}`}></div>
        <div className={`absolute top-0 left-0 w-[80%] h-[90vh] bg-main-brown transition-transform duration-300 ${props.menuOpen && "-translate-x-full"}`}>
          <div className="container px-8 mx-auto text-white font-thin">
            <ul className='mt-[80px] text-[28px]'>
              <li className='mb-6'>
                <Link href="/">
                  HOME
                </Link>
              </li>
              <li className='mb-6'>
                <Link href="/about">
                  ABOUT
                </Link>
              </li>
              <li className='mb-6'>
                <Link href="/">
                  WOMEN'S MENU
                </Link>
              </li>
              <li className='mb-6'>
                <Link href="/">
                  MEN'S MENU
                </Link>
              </li>
              <li className='mb-6'>
                <Link href="/">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuOpen
