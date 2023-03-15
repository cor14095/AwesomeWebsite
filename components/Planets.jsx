import React from 'react'

const Planets = () => {
  return (
    <div id="planets" className='relative w-screen h-screen max-w-full z-0'>
      {/** Planet 1 */}
      <div className='absolute top-10 left-5 w-32 h-32 md:top-20 md:left-10 sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-gradient-to-t from-darkslategray to-avatar-blue blur-lg animate-planet-bounce animation-delay-1s' />
      <div className='absolute top-10 left-5 w-32 h-32 md:top-20 md:left-10 sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-space-black animate-planet-bounce animation-delay-1s' />


      {/** Planet 2 */}
      <div className='absolute top-1/4 right-6 w-32 h-32 md:top-2/4 md:left-[15%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-gradient-to-t from-darkslategray to-avatar-blue blur-lg animate-planet-bounce' />
      <div className='absolute top-1/4 right-6 w-32 h-32 md:top-2/4 md:left-[15%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-space-black animate-planet-bounce' />


      {/** Planet 3 */}
      <div className='absolute top-2/4 left-4 w-32 h-32 md:top-24 md:left-[35%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-gradient-to-t from-darkslategray to-avatar-blue blur-lg animate-planet-bounce animation-delay-2s' />
      <div className='absolute top-2/4 left-4 w-32 h-32 md:top-24 md:left-[35%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-space-black animate-planet-bounce animation-delay-2s' />


      {/** Planet 4 */}
      <div className='absolute bottom-10 right-7 w-32 h-32 md:top-2/4 md:right-[35%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-gradient-to-t from-darkslategray to-avatar-blue blur-lg animate-planet-bounce' />
      <div className='absolute bottom-10 right-7 w-32 h-32 md:top-2/4 md:right-[35%] sm:w-52 sm:h-52 md:w-40 md:h-40 xl:w-72 xl:h-72 rounded-full bg-space-black animate-planet-bounce' />


      {/** Avatar */}
      <div className='invisible md:visible'>
        <div className='absolute top-20 right-10 md:w-40 md:h-72 lg:w-48 lg:h-96 xl:w-[25%] xl:h-[60%] rounded-lg bg-gradient-to-t from-darkslategray to-avatar-blue blur-lg animate-planet-bounce animation-delay-3s' />
        <div className='absolute top-20 right-10 md:w-40 lg:w-48 xl:w-[25%] h-[60%] rounded-lg bg-space-black animate-planet-bounce animation-delay-3s' />
      </div>

    </div>
  )
}

export default Planets