// Code Keypad Component Here

import React from 'react'
const handleChange = () => {
    console.log("Entering password...")
}

function Keypad() {
  return (
    <div >
        Keypad
        <input 
            type='password' 
            onChange={handleChange} >
        </input>
    </div>
  )
}

export default Keypad