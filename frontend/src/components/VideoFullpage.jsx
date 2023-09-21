import React from 'react'
import bg from '../assets/tanjir.PNG'
import Video from '../components/Video'

const VideoFullpage = () => {
  return (
    <div className='md:w-[1280px] md:h-[720px] my-auto mx-auto flex justify-center items-center overflow-hidden px-10 py-10'>
        <Video className="z-20" />
    </div>
  )
}

export default VideoFullpage
