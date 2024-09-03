import React from 'react'

const BotArmy = () => {

    


  return (
    <div>
        <div className='container mx-auto '>
            <div className='grid gap-10 mb-8 lg:grid-cols-2 '>
            <div>
                <h1 className='text-5xl font-bold mt-2 mb-8'>Schbang’s Bot Army</h1>
                <p className='text-base	'>We strongly believe that AI won’t replace human beings but people using AI will certainly get ahead in the race. So we created an army of 20 custom AI Bots to help Schbangers mine insights, brainstorm campaign ideas and refine their content.</p>
                <br />
                <p className='text-base	'>
                Our efficient super-assistants can help with everything from dissecting the target audience for your brand to writing captions and scripts for ads. They can also help with operational tasks like generating appropriate questions to help us get clearer briefs from clients and breaking down large projects into action plans that enable us to achieve results fast.

                </p>
                <br />
                <p className='text-base	 '>
                Fascinated by the possibilities? We’re inviting you to take them for a spin now!
                </p>

                <button className='border p-3 px-14 rounded-full overflow-hidden transition-transform duration-300  hover:translate-x-12  text-sm hover:bg-white hover:text-black border-black text-white  bg-black mt-5'>
                Access Schbang’s Bots   →
                </button>

            </div>  
            <div>
                <img src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6478760b33e012154432678c_the%20Edge-Bots-p-1080.png" 
                alt="Img" 
                className='rounded-lg '/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default BotArmy