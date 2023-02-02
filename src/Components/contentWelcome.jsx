import React from 'react'
import KontenProfil from './KontenProfil'
import avatar from './Pic/avatar.png'
import device from './Pic/device.png'
import Profile from './Profile'
import { Bounce } from 'react-awesome-reveal'
export default function Welcome() {
  return (
    <>
        <div className='container mx-auto'>
          <div className='text-center mt-2 lg:mt-12 text-black'>
            <Bounce delay={500} duration={1500} triggerOnce={true}>
              <h1 className='text-2xl lg:text-4xl font-bold'>Front End Developer, Web Design, Gamer</h1>
            </Bounce>
            <Bounce delay={1000} duration={1500} triggerOnce={true}>
              <h1 className='text-lg lg:text-2xl mt-4 lg:mt-8'>I love simple things, and i love what i do.</h1>
            </Bounce>
              <div className='flex justify-center mt-12 lg:mt-20'>
                  <img className='rounded-full border w-1/2 lg:w-1/4' src={avatar} alt="avatar"/>
              </div>
              <KontenProfil/>
              <Profile/>
          </div>
        </div>

        <div className='container h-1/2 mx-auto'>
            <div className='flex justify-center mt-24 mb-4'>
                <img className='w-11/12 h-11/12 lg:w-3/4 lg:h-3/4' src={device} alt="device"/>
            </div>
        </div>
    
    </>
  )
}
