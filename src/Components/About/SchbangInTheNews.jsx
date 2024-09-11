import React, { useEffect, useState } from 'react'

const SchbangInTheNews = () => {
    const [cards,setCards]=useState([]);
    
    useEffect(()=>{
        fetch('AboutCard.json')
        .then(res=>res.json())
        .then(data =>{
            setCards(data);
        })
    },[])

  return (
    <div>
        <div>
        <div className='flex items-center justify-center'>
        <div className='text-5xl font-bold py-[85px]'>
        <p className='font-sora'>Schbang in the news</p>
        
        </div>
        </div>
       

        <div className='pb-20 '>

        <div className='py-5 flex justify-end px-24 '>
        <button className='p-2 px-4 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-black focus:text-white'>Press Releases</button>
        <button className='p-2 px-4 border rounded-full m-2 focus:outline-none focus:ring-0 focus:bg-black focus:text-white'>Media Features</button>
        </div>
        <div className='container mx-auto '>
        <hr className=" pb-7    border-gray-400 " />
        </div>


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
    </div>
  )
}

export default SchbangInTheNews