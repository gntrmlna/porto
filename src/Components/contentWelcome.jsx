import React from 'react'
import avatar from './avatar.png'
export default function Welcome() {
  return (
    <>
        <div className='text-center mt-12'>
            <h1 className='text-4xl font-bold'>Front End Developer</h1>
            <h1 className='text-2xl mt-8'>I love simple things, and i love what i do.</h1>
            <div className='flex justify-center mt-12'>
                <img className='rounded-full border' src={avatar} alt="" width={200} height={200}/>
            </div>
        </div>
    </>
  )
}
