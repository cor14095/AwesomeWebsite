import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ModalData } from '../components/ModalData'

function About() {
  const [handsA, setHandsA] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalName, setModalName] = useState('')
  const [Title, setTitle] = useState('')
  const [Text, setText] = useState('')

  const handleModal = (name = '') => {
    setModal(!modal)
    setModalName(name)
    let nav = document.getElementById('nav')

    if (!modal) {
      nav.classList.add('hidden')
      document.body.classList.add('stop-scrolling')
    } else {
      nav.classList.remove('hidden')
      document.body.classList.remove('stop-scrolling')
    }
  }

  useEffect(() => {

    setTitle(ModalData[modalName] ? ModalData[modalName].Title : '')
    setText(ModalData[modalName] ? ModalData[modalName].Text : '')

    const triggerAnimation = () => {
      /** Window scroll variables. */
      let wS = window.scrollY
      /** Home position */
      let hT = document.getElementById('planets').offsetTop
      /** About position */
      let aT = document.getElementById('about').offsetTop
      /** Experience position */
      let eT = document.getElementById('experience').offsetTop

      if (wS >= hT && wS <= ((hT + aT) / 2) && handsA) { setHandsA(false); return 0; }
      if (wS >= aT && wS <= ((aT + eT) / 2) && !handsA) { setHandsA(true); return 0; }
      if (wS >= eT && handsA) { setHandsA(false); return 0; }
    }

    window.addEventListener('scroll', triggerAnimation)
  })

  return (
    <div id="about" className='relative w-screen h-screen max-w-full z-10 overflow-hidden'>
      {/** Web view first */}
      {/** Left hand */}
      <div className={`absolute top-[40%] sm:top-[35%] xl:top-[30%] 2xl:top-[25%] w-[75%] h-[30%] animate-planet-bounce ${handsA ? '-left-[70%]' : 'left-0'} ease-in duration-1000`}>
        <Image
          src='/hand.png'
          alt='/'
          width={2000}
          height={1000}
          className='w-[100%] -scale-100'
        />
      </div>
      {/** Right hand */}
      <div className={`absolute bottom-[20%] sm:bottom-[15%] xl:bottom-[15%] 2xl:bottom-[10%] w-[75%] h-[30%] animate-planet-bounce ${handsA ? '-right-[70%]' : 'right-0'} ease-in duration-1000`}>
        <Image
          src='/hand.png'
          alt='/'
          width={2000}
          height={1000}
          className='w-[100%]'
        />
      </div>

      {/** Information gloves */}
      {/** Personal */}
      <div
        className={`absolute bottom-[70%] sm:bottom-[70%] md:bottom-[40%] xl:bottom-[40%] 2xl:top-[40%] left-[25%] sm:left-[30%] md:left-[10%] lg:left-[10%] w-52 h-52 sm:w-64 sm:h-64 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-orb bg-cover ${handsA ? 'scale-100 ease-in' : 'scale-0 ease-out'} duration-1000 scale-0`}
        onClick={() => handleModal('Personal') }
      >
        <div
          className='m-auto flex justify-between items-center p-6 w-full h-full text-white'
        >
          <div
            className='flex-col justify-center items-center text-justify max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden'
          >
            <h1 className='font-bold text-sm md:text-2xl p-1 md:p-4'>Personal</h1>
            <p className='text-ellipsis text-xs'>
              I'm a 27 years old programmer who has explore and master diverse arts of coding, I like to say that with short time I can [...]
            </p>
          </div>
        </div>
      </div>

      {/** Hobbies */}
      <div
        className={`absolute bottom-[40%] sm:bottom-[40%] md:bottom-[40%] xl:bottom-[40%] 2xl:top-[40%] left-[25%] sm:left-[30%] md:left-[40%] xl:left-[40%] w-52 h-52 sm:w-64 sm:h-64 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-orb bg-cover ${handsA ? 'scale-100 ease-in' : 'scale-0 ease-out'} duration-1000 scale-0`}
        onClick={() => handleModal('Hobbies')}
      >
        <div
          className='m-auto flex justify-between items-center p-6 w-full h-full text-white'
        >
          <div
            className='flex-col justify-center items-center text-justify max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden'
          >
            <h1 className='font-bold text-sm md:text-2xl p-1 md:p-4'>Hobbies</h1>
            <p className='text-ellipsis text-xs'>
              I'm Enjoy spendig my free time reading about programming or financial news, weirdly enough I love financial topics and [...]
            </p>
          </div>
        </div>
      </div>

      {/** Goals */}
      <div
        className={`absolute bottom-[10%] sm:bottom-[10%] md:bottom-[40%] xl:bottom-[40%] 2xl:top-[40%] left-[25%] sm:left-[30%] md:left-[70%] xl:left-[70%] w-52 h-52 sm:w-64 sm:h-64 md:w-52 md:h-52 xl:w-72 xl:h-72 bg-orb bg-cover ${handsA ? 'scale-100 ease-in' : 'scale-0 ease-out'} duration-1000 scale-0`}
        onClick={() => handleModal('Goals')}
      >
        <div
          className='m-auto flex justify-between items-center p-6 w-full h-full text-white'
        >
          <div
            className='flex-col justify-center items-center text-justify max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden'
          >
            <h1 className='font-bold text-sm md:text-2xl p-1 md:p-4'>Goals</h1>
            <p className='text-ellipsis text-xs'>
              Since the begining of my life I've had some consistente goals, some of them have modify but most remain similar, the main goal on my [...]
            </p>
          </div>
        </div>
      </div>

      {/** Modal section */}
      <div
        className={`fixed top-0 left-0 ${modal ? 'visible' : 'invisible'} w-full h-full max-w-full bg-black/90 z-30`}
        onClick={() => handleModal('')}
      >
        <div className='absolute top-[50%] left-[50%] flex-col justify-center items-center text-center w-[100%] h-[80%] md:w-[90%] xl:w-[50%] bg-space-light-blue translate-x-[-50%] translate-y-[-50%] z-40 divide-y-4 divide-slate-400/25'>
          <div className='m-auto pt-2 pb-2 text-stars-white text-[72px] font-bold'>
            <h1>{ Title }</h1>
          </div>
          <div className='m-auto py-2 px-7 text-stars-white text-[36px] xl:text-[24px] whitespace-pre-wrap text-center'>
            <p>{ Text }</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About