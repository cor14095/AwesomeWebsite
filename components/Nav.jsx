import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const [titleText, setTitleText] = useState('Home')


  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const changeTitle = () => {
      /** Window scroll variables. */
      let wS = window.scrollY

      /** Home position */
      let hT = document.getElementById('planets').offsetTop
      //console.log(wS, hT, 'Home')
      
      /** About position */
      let aT = document.getElementById('about').offsetTop
      //console.log(wS, aT, 'About')

      /** Experience position */
      let eT = document.getElementById('experience').offsetTop
      //console.log(wS, eT, 'Experience')
      
      if (wS >= hT && wS <= ((hT + aT) / 2)) { setTitleText('Home') }
      if (wS >= aT && wS <= ((aT + eT) / 2)) { setTitleText('About Me') }
      if (wS >= eT) { setTitleText('My Work Experience') }
    }

    window.addEventListener('scroll', changeTitle)
  })

  return (
    <div id='nav' className='fixed left-0 top-0 w-full bg-gradient-to-b from-space-light-blue z-20'>
      <div className='m-auto flex justify-between items-center p-4 text-inverted-space'>
        <Link href='/#' className='z-10'>
          <h1 className='font-bold text-2xl hover:text-space-black'>{titleText}</h1>
        </Link>

        {/** Web Nav */}
        <ul className='hidden md:flex z-20'>
          <li className='p-4 hover:text-space-black'>
            <Link href='/#'>Home</Link>
          </li>
          <li className='p-4 hover:text-space-black'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='p-4 hover:text-space-black'>
            <Link href='/#experience'>Experience</Link>
          </li>
        </ul>

        {/** Mobile Nav */}
        <div className='block md:hidden z-10' onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={`absolute md:hidden top-0 ${ nav ? 'left-0' : 'left-full' } flex justify-center items-center text-center w-full h-screen bg-darkslategray/80 ease-in duration-300`}>
          <ul>
            <li className='p-5 text-4xl hover:text-space-black' onClick={handleNav}>
              <Link href='/#'>Home</Link>
            </li>
            <li className='p-5 text-4xl hover:text-space-black' onClick={handleNav}>
              <Link href='/#about'>About</Link>
            </li>
            <li className='p-5 text-4xl hover:text-space-black' onClick={handleNav}>
              <Link href='/#experience'>Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav