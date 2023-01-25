import React from 'react'
import useTransition from 'react-transition-state';
import { useState } from 'react'

export default function Profile() {
    const [isShown, setIsShown] = useState(false);
    const [{status,isMounted,isEnter},toggle] = useTransition({timeout:750,preEnter:true});

    // const handleClick = event =>{
    //     setIsShown(true);
    // }
  return (
    <div className='mt-8'>
        <button className='border-2 border-primaryClr rounded-lg px-3 py-2 text-primaryClr cursor-pointer hover:bg-primaryClr hover:text-black' onClick={()=>toggle()}>Profil</button>
        {isMounted &&(
          <div className={`example ${status}`}>
              <h2>cek</h2>
          </div>
        )}
            
        
    </div>
  )
}
