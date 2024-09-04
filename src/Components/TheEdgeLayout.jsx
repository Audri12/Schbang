import React from 'react'
import TheEdge1 from './TheEdge1'
import BotArmy from './BotArmy'
import MarketingGlossary from './MarketingGlossary'
import Button from './Button'

const TheEdgeLayout = () => {
  return (
    <div className='mx-5 mt-32 mb-32 '>
        <TheEdge1></TheEdge1>
        <BotArmy></BotArmy>
        <MarketingGlossary></MarketingGlossary>
        <Button></Button>
    </div>
  )
}

export default TheEdgeLayout