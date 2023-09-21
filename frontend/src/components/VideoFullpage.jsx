import React from 'react'
import bg from '../assets/tanjir.PNG'
import Video from '../components/Video'

const VideoFullpage = () => {
  return (
    <div className='w-full h-auto my-auto mx-auto flex justify-center items-center md:py-14 overflow-hidden '>
        <Video className="z-20" />
      <img src={bg} alt='BG' className='w-full h-full object-cover blur absolute p-20'/>
    </div>
  )
}

export default VideoFullpage
