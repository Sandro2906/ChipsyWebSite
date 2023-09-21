import React from 'react'
import bg from '../assets/tanjir.PNG'
import Video from '../components/Video'

const VideoFullpage = () => {
  return (
    <div className='md:w-[700px] md:h-[700px] my-auto mx-auto flex justify-center items-center overflow-hidden bg-yellowLogo'>
        <Video className="z-20" />
    </div>
  )
}

export default VideoFullpage
