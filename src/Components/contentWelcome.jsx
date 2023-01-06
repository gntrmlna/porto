import React from 'react'
import avatar from './avatar.png'
import device from './device.png'
export default function Welcome() {
  return (
    <>
        <div className='container h-1/2 mx-auto'>
          <div className='text-center mt-12'>
              <h1 className='text-4xl font-bold'>Front End Developer</h1>
              <h1 className='text-2xl mt-8'>I love simple things, and i love what i do.</h1>
              <div className='flex justify-center mt-20'>
                  <img className='rounded-full border' src={avatar} alt="" width={250} height={250}/>
              </div>
          </div>
        </div>

        <div className='container h-1/2 mx-auto'>
            <div className='flex justify-center mt-24 mb-4'>
                <img className='w-3/4 h-3/4' src={device} alt=""/>
            </div>
        </div>
    </>
  )
}
