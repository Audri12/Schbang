import React, { useEffect, useState } from 'react'

const ContactUsImg = () => {

        const [cards,setCards]=useState([]);
        
    
        useEffect(()=>{
            fetch('ContactleftImg.json')
            .then(res=>res.json())
            .then(data =>{
                setCards(data);
            })
        },[])
  return (
    <div>
      <div>
      {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='w-full  mx-auto'>
                <img src={card.image} className=' w-full h-full '></img>          
          </div>
          </div>
          </div>
         
        ))

        }
      </div>
       
    </div>
  )
}

export default ContactUsImg