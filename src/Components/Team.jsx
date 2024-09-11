
import React, { useEffect, useState } from 'react'
import '../Select.module.css'


const Team = () => {
    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch('Team.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])

  return (
    <div className='container mx-auto max-w-[1400px] p-24'>
        <div className='flex items-center justify-center '>
        <div className='text-5xl font-bold py-[85px]'>
        <p className='font-sora'>Our Team</p>
        
        </div>
        </div>
        
        <div className='py-[128px]'>
        <div className='grid  gap-5 gap-y-16 row-gap-5  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  '>
        {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='w-full  '>
                <img src={card.image} className='object-cover w-[403.40625px] h-[484px] rounded-lg shadow-lg'></img>
             
          <h1 className='font-sora mt-7 font-bold text-2xl'>{card.name}</h1>
          <p className='text-sm font-sora mt-[5px]'>{card.designation}</p>
          
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
export default Team;