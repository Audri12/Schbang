import React from 'react'
import HoverButton2, { HoverButton, HoverButton3, HoverButton4, HoverButton5 } from './HoverButton';

const Button = () => {
  return (
    <div className='container mx-auto'>
         <div className='grid   row-gap-5  mt-40  sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-4 '>
        <HoverButton></HoverButton>
        
        <HoverButton3></HoverButton3>
        <HoverButton5></HoverButton5>
        <HoverButton5></HoverButton5>
       
       </div>
    </div>
  )
}

export default Button