import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineGithub, AiFillLinkedin, AiFillMail, AiFillHome } from 'react-icons/ai'


function Footer() {
  return (
    <div className='relative w-full h-[25vh] bg-gradient-to-t from-space-light-blue z-20'>
      <div className='grid grid-cols-2 text-stars-white pt-[5vh]'>
        <div className='flex flex-col'>
          <Image
            src="/perryLogo.png"
            alt="/"
            width={100}
            height={100}
            className='mx-auto mt-auto'
          />
          <h1 className='mx-auto mb-auto p-4'>Alejandro "Perry" Cortes</h1>
        </div>
        <div className='flex justify-between items-center'>
          <ul className='grid grid-rows-2'>
            <li className='grid grid-cols-2'>
                <AiOutlineGithub
                size={20}
                className='m-auto'
              />
              <Link href='https://github.com/cor14095' target='_blank'>
                <h2 className='m-auto'>Github</h2>
              </Link>
            </li>
            <li className='grid grid-cols-2'>
                <AiFillLinkedin
                size={20}
                className='m-auto'
              />
              <Link href='https://www.linkedin.com/in/alecrts1996/' target='_blank'>
                <h2 className='m-auto'>LinkedIn</h2>
              </Link>
            </li>
            <li className='grid grid-cols-2'>
                <AiFillMail
                  size={20}
                  className='m-auto'
                />
              <Link href='mailto:ale.crts1996@gmail.com' target='_blank'>
                <h2 className='m-auto'>Mail me!</h2>
              </Link>
            </li>
            <li className='grid grid-cols-2'>
              <AiFillHome
                size={20}
                className='m-auto'
              />
              <h2 className='m-auto'>Guatemala, Guatemala City</h2>
            </li>
          </ul>
        </div>
      </div>
      <div className='absolut bottom-0 left-0 h-[5vh] bg-landscape bg-contain'/>
    </div>
  )
}

export default Footer