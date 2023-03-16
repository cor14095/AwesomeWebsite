import React from 'react'

const Planets = () => {
  return (
    <div id="planets" className='relative w-screen h-screen max-w-full z-0'>

      {/** Avatar */}
      <div className='invisible md:visible'>
        <div className='absolute top-[25%] right-[10%] md:w-[40vw] xl:w-[40vw] xl:right-[1%] h-[50%] bg-avatar bg-contain bg-bottom bg-no-repeat animate-planet-bounce animation-delay-3s'>
          <div className='absolute -bottom-[5%] left-[25%] h-[10%] w-[50%] bg-gradient-to-t from-avatar-blue to-purple-500 blur-lg animate-planet-bounce animation-delay-3s' />
        </div>
      </div>

      {/** Planet 1 */}
      <div className='absolute top-[10%] left-[10%] w-[40vw] h-[40vw] md:top-[20%] md:left-[5%] md:w-[25vw] md:h-[25vw] xl:w-[18vw] xl:h-[18vw] bg-planet-1 bg-cover animate-planet-bounce animation-delay-1s' />

      {/** Planet 2 */}
      <div className='absolute top-[30%] left-[50%] w-[40vw] h-[40vw] md:top-[55%] md:left-[15%] md:w-[25vw] md:h-[25vw] xl:w-[17vw] xl:h-[17vw] bg-planet-2 bg-cover animate-planet-bounce' />

      {/** Planet 3 */}
      <div className='absolute top-[55%] left-[15%] w-[40vw] h-[40vw] md:top-[25%] md:left-[35%] md:w-[25vw] md:h-[25vw] xl:w-[16vw] xl:h-[16vw] bg-planet-3 bg-cover animate-planet-bounce animation-delay-2s' />

      {/** Planet 4 */}
      <div className='absolute top-[80%] left-[45%] w-[40vw] h-[40vw] md:top-[60%] md:left-[50%] md:w-[25vw] md:h-[25vw] xl:w-[20vw] xl:h-[20vw] bg-planet-4 bg-cover animate-planet-bounce' />
    </div>
  )
}

export default Planets