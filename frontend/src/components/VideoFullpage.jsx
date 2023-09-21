import React from 'react'
import bg from '../assets/tanjir.PNG'
import Video from '../components/Video'

const VideoFullpage = () => {
  return (
    <div className='md:w-full md:auto my-auto mx-auto flex justify-center items-center overflow-hidden'>
        <Video className="z-20" />
    </div>
  )
}

export default VideoFullpage
