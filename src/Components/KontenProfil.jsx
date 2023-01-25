import React from 'react'
import useTransition from 'react-transition-state';

export default function KontenProfil() {
    const [{status,isMounted},toggle] = useTransition({timeout:750,preEnter:true});
  return (
    <div className='mt-8'>
        <button className='border-2 border-primaryClr rounded-lg px-3 py-2 text-primaryClr cursor-pointer hover:bg-primaryClr hover:text-black' onClick={()=>toggle()}>Profil</button>
        {isMounted &&(
          <div className={`example ${[status]}`}>
              konten Profil
          </div>
        )}
    </div>
  )
}
