import React from 'react'
import KontenPorto from './KontenPorto';
import useTransition from 'react-transition-state';
import KontenProfil from './KontenProfil';

export default function Profile() {
  const [{status,isMounted},toggle] = useTransition({timeout:750,preEnter:true});
    
  return (
    <>
    <div className="flex justify-center">
        <KontenPorto/> 
    </div>
    </>
  )
}
