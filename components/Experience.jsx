import React, { useEffect } from 'react'

function Experience() {

  /** 
   * This IS NOT MY CODE I find a very cleaver solution here:
   * https://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
   * 
   * I just had to fix a minor bug on calc y2 and puting th line in the middle of cx an cy.
   * And made it so it can locally calculate the distance based on parent and not the hole page.
   * 
   */

  const getOffset = (el) => {
    var rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight
    };
  }

  const clearLines = () => {
    let lines = document.getElementsByClassName('calcLine')
    console.log(lines)

    for (var i = 0; i < lines.length; i++) {
      lines[i].remove()
    }

    console.log('Removed: ', i, 'lines...')
  }

  const connect = (div1, div2, color, thickness, parent) => {
    // draw a line connecting elements
    let off1 = getOffset(div1);
    let off2 = getOffset(div2);
    // bottom right
    let x1 = off1.left + off1.width;
    let y1 = off1.top + off1.height - parent.offsetTop;
    // top right
    let x2 = off2.left + off2.width;
    let y2 = off2.top + off2.height - parent.offsetTop;
    // distance
    let length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    // center
    let cx = ((x1 + x2) / 2) - (length / 2) - (off1.width / 2);
    let cy = ((y1 + y2) / 2) - (thickness / 2) - (off1.height / 2);
    // angle
    let angle = Math.atan2((y1 - y2), (x1 - x2)) * (180 / Math.PI);
    // make hr
    let htmlLine = "<div class='calcLine' style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg); z-index: 1' />";

    //document.body.innerHTML += htmlLine;
    parent.innerHTML += htmlLine;
  }

  const drawLines = () => {
    connect(
      document.getElementById('work-1'),
      document.getElementById('work-2'),
      'white',
      '5',
      document.getElementById('experience')
    )
    connect(
      document.getElementById('work-2'),
      document.getElementById('work-3'),
      'white',
      '5',
      document.getElementById('experience')
    )
    connect(
      document.getElementById('work-3'),
      document.getElementById('work-4'),
      'white',
      '5',
      document.getElementById('experience')
    )

    console.log('Lines drawn!')
  }

  useEffect(() => {

    const handleResize = () => {
      clearLines()
      drawLines()
    }

    drawLines()

    // Add event listener
    window.addEventListener("resize", handleResize);
  })

  return (
    <div id="experience" className='relative my-10 w-screen h-screen max-w-full z-10 overflow-hidden'>
      {/** Work 1 */}
      <div
        id='work-1'
        className={`absolute bottom-[80%] sm:bottom-[70%] md:bottom-[60%] lg:bottom-[20%] left-[15%] sm:left-[20%] md:left-[10%] lg:left-[10%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-avatar-blue z-10`}
      >
        <div className='m-auto flex justify-between items-center p-2 w-full h-full text-white'>
          <div className='flex-col justify-center items-center text-center max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden m-auto'>
            <h1 className='font-bold text-[12px] md:text-2xl p-1 md:p-4'>Xoom</h1>
            <p className='text-ellipsis text-[8px]'>
              2020 - Present
            </p>
          </div>
        </div>
      </div>

      {/** Work 2 */}
      <div
        id='work-2'
        className={`absolute bottom-[50%] sm:bottom-[40%] md:bottom-[40%] lg:bottom-[45%] left-[55%] sm:left-[70%] md:left-[55%] lg:left-[45%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-avatar-blue z-10`}
      >
        <div className='m-auto flex justify-between items-center p-2 w-full h-full text-white'>
          <div className='flex-col justify-center items-center text-center max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden m-auto'>
            <h1 className='font-bold text-[12px] md:text-2xl p-1 md:p-4'>Zuntex</h1>
            <p className='text-ellipsis text-[8px]'>
              2019 - 2020
            </p>
          </div>
        </div>
      </div>

      {/** Work 3 */}
      <div
        id='work-3'
        className={`absolute bottom-[25%] sm:bottom-[15%] md:bottom-[20%] lg:bottom-[60%] left-[65%] sm:left-[75%] md:left-[75%] lg:left-[65%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-avatar-blue z-10`}
      >
        <div className='m-auto flex justify-between items-center p-2 w-full h-full text-white'>
          <div className='flex-col justify-center items-center text-center max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden m-auto'>
            <h1 className='font-bold text-[12px] md:text-2xl p-1 md:p-4'>DevPack</h1>
            <p className='text-ellipsis text-[8px]'>
              2018 - 2022
            </p>
          </div>
        </div>
      </div>

      {/** Work 4 */}
      <div
        id='work-4'
        className={`absolute bottom-[10%] sm:bottom-[5%] md:bottom-[5%] lg:bottom-[50%] left-[25%] sm:left-[45%] md:left-[50%] lg:left-[80%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-avatar-blue z-10`}
      >
        <div className='m-auto flex justify-between items-center p-2 w-full h-full text-white'>
          <div className='flex-col justify-center items-center text-center max-h-[70%] max-w-full whitespace-pre-warp overflow-hidden m-auto'>
            <h1 className='font-bold text-[12px] md:text-2xl p-1 md:p-4'>CoditexSA</h1>
            <p className='text-ellipsis text-[8px]'>
              2017 - 2020
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experience