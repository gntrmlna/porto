import React from 'react'
import KontenProfil from './KontenProfil';
import KontenPorto from './KontenPorto';

export default function Profile() {
    
    
  return (
    <div className='mt-8'>
        <div className="flex justify-center">
          <KontenProfil/>
          <KontenPorto/>
        </div>
    </div>
  )
}
