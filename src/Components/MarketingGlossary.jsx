import React from 'react'

const MarketingGlossary = () => {
  return (
    <div> <div className='container mx-auto mt-32'>
    <div className='grid gap-5 mt-16 mb-8 lg:grid-cols-2 '>
    <div>
        <img src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6478761f1963c3bee625bc80_the%20Edge-Marketing%20Glossary-p-1080.png" 
        alt="Img2" 
        className='rounded-lg '/>
    </div>
    <div>
        <h1 className='text-5xl font-bold mt-1 mb-8'>Schbang’s Marketing Glossary
        </h1>
        <p className='text-base	'>We work in a constantly changing field. As both consumers and the platforms they interact with evolve at a rapid pace, there are new concepts and theories coming up every day. It can feel intimidating to keep track of what things actually mean, especially for young joineees. 
        </p>
        <br />
        <p className='text-base	'>
        So we created this Marketing Glossary to familiarize you with the most important terms that you’ll regularly hear and use in the field. It includes industry jargon and terminologies from all branches, including copywriting, social media, graphic design, SEO, paid media, video editing, animation and more.


        </p>
        <br />
        <p className='text-base	 '>
        Whether you’re a fresher wanting to catch up with the others or a seasoned professional who just wants to brush up on their ABCs, this glossary is a must-read for anyone who wants to stay updated with the times.


        </p>

        <button className='border p-3 px-14 rounded-full overflow-hidden transition-transform duration-300 hover:cursor-pointer hover:translate-x-12  text-sm hover:bg-white hover:text-black border-black text-white  bg-black mt-5'>
        Access Schbang’s  Glossary   →
        </button>

    </div>  
   
    </div>
</div></div>
  )
}

export default MarketingGlossary