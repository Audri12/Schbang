import React, { useEffect, useState } from 'react'

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
    <div className='container mx-auto'>
        <div className='flex items-center justify-center'>
        <div className='text-5xl font-bold mb-8'>
        Our Team
        </div>
        </div>
        
        <div className='grid  gap-8 row-gap-5  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-5 '>
        {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='w-full  mx-auto'>
                <img src={card.image} className='object-cover w-full max-h-max rounded-lg shadow-lg'></img>
             
          <h1 className='text-lg'>{card.name}</h1>
          <p>{card.designation}</p>
          
          </div>
          </div>
          </div>
         
        ))

        }
        </div>
    </div>
  )
}

export default Team