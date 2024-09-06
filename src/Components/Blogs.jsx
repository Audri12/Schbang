import React, { useEffect, useState } from 'react'


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
    <div>
        <div className='flex items-center justify-center p-24 font-sora'>
        <div className='text-5xl font-bold '>
        
        <p className='font-sora'>Blogs</p>
        </div>
      
        </div>

        <div className='pb-20 '>
        <div className='grid  gap-6 row-gap-5  px-24 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-16  mx-5 sm:mx-5 md:mx-0  '>
        {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='w-full  mx-auto'>
                <img src={card.image} className='object-cover w-full h-full rounded-xl shadow-lg'></img>
             
          <h1 className='text-base font-normal font-sora pt-2.5'>{card.name}</h1>
          
          </div>
          </div>
          </div>
         
        ))

        }
        </div>
        </div>
        
    </div>
  )
}

export default Blogs