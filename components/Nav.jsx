import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const [titleText, setTitleText] = useState('Home')


  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed left-0 top-0 w-full bg-gradient-to-b from-darkslategray z-20'>
      <div className='m-auto flex justify-between items-center p-4 text-inverted-space'>
        <Link href='/#'>
          <h1 className='font-bold text-2xl'>Home</h1>
        </Link>

        {/** Web Nav */}
        <ul className='hidden md:flex z-20'>
          <li className='p-4'>
            <Link href='/#'>{titleText}</Link>
          </li>
          <li className='p-4'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/#experience'>Experience</Link>
          </li>
        </ul>

        {/** Mobile Nav */}
        <div className='block md:hidden z-20' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`absolute md:hidden top-0 ${ nav ? 'left-0' : 'left-full' } flex justify-center items-center text-center w-full h-screen bg-darkslategray ease-in duration-300`}>
          <ul>
            <li className='p-5 text-4xl hover:text-space-black'>
              <Link href='/#'>Home</Link>
            </li>
            <li className='p-5 text-4xl hover:text-space-black'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='p-5 text-4xl hover:text-space-black'>
              <Link href='/#experience'>Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav