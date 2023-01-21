import React from 'react'
import { useState } from 'react'

export default function Profile() {
    const [isShown, setIsShown] = useState(false);

    // const handleClick = event =>{
    //     setIsShown(true);
    // }
  return (
    <div>
        <button onClick={()=>setIsShown(!isShown)}>Klik</button>
        {isShown &&(
            <div>
                <h2>cek</h2>
            </div>
        )}
    </div>
  )
}
