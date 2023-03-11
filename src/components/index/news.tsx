import React from 'react'
import Link from 'next/link'

const News = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="">
          <h3 className='text-main-gold text-center mt-8 text-[20px] font-thin'>お知らせ</h3>
          <div className="bg-white w-[80%] h-auto mx-auto mt-4 rounded-lg">
            <ul className='px-4 py-4 text-main-gold'>
              <li className=''>
                <time className='text-[14px] block font-light tracking-wider'>2022 11/11</time>
                <Link href="/" className='text-[14px] pb-2 text-center block'>
                  ホームページを作成しました。
                </Link>
              </li>
              <li className=''>
                <time className='text-[14px] block font-light tracking-wider'>2022 11/11</time>
                <Link href="/" className='text-[14px] pb-2 text-center block'>
                  コースメニュー始めました
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
