import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Endroll = () => {
  return (
    <div className='mx-auto container px-4 mb-8'>
      <p className='mt-24 text-center font-mill text-[14px] text-main-gold tracking-wider leading-6'>
        ご質問がありましたら、お気軽にLINE<br/>
        またはInstaからのメッセージお待ちしております。
      </p>
      <Link
        className='block mt-12'
        href="/"
      >
        <Image
          className='rounded-3xl'
          src="/about/contact.jpg"
          alt="コンタクトページへ"
          width={500}
          height={500}
        />
      </Link>
    </div>
  )
}

export default Endroll
