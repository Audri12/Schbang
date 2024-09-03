import React, { useEffect, useState } from 'react'
import HoverButton2, { HoverButton, HoverButton3, HoverButton4, HoverButton5 } from './HoverButton';


const Blogs = () => {

    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('Blogs.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])


  return (
    <div className='container mx-auto'>
        <div className='flex items-center justify-center'>
        <div className='text-5xl font-bold mb-8'>
        Blogs
        </div>
        </div>

        <div className='grid  gap-8 row-gap-5  sm:grid-cols-1 lg:grid-cols-3  md:grid-cols-2 sm:mx-auto '>
        {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='w-full  mx-auto'>
                <img src={card.image} className='object-cover w-full h-full rounded shadow-lg'></img>
             
          <h1 className='text-lg'>{card.name}</h1>
          
          </div>
          </div>
          </div>
         
        ))

        }
        </div>
        <div className='grid   row-gap-5  mt-40  sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-4 '>
        <HoverButton></HoverButton>
        <HoverButton2></HoverButton2>
        <HoverButton3></HoverButton3>
        <HoverButton4></HoverButton4>
        <HoverButton5></HoverButton5>
        <div>

        <div>
          
        </div>
       
        </div>
       </div>

    </div>
  )
}

export default Blogs