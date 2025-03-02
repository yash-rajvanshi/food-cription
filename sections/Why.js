import React from 'react'
import Why1 from "@/assets/images/Why3.jpg"

const Why = () => {
  return (
    <div>
      <div className='w-full h-[100vh] relative mb-16 ' style={{ backgroundImage: ` url(${Why1.src})`, backgroundSize: "contain",backgroundPositionX:"right", backgroundRepeat: "no-repeat" }}>
        <div className='absolute right-[15rem] top-[4rem]'>Helooo World</div>
        <div className='absolute right-[20rem] top-[15rem]'>Helooo World</div>
        <div className='absolute right-[20rem] top-[28rem]'>Helooo World</div>
        <div className='absolute right-[15rem] top-[40rem]'>Helooo World</div>
      </div>
    </div>
  )
}

export default Why
