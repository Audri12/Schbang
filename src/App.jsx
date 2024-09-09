
import TheEdgeLayout from './Components/TheEdgeLayout'
import BlogsLayout from './Components/BlogsLayout'

import './App.css'
import Team from './Components/Team'
import VideoSection from './Components/VideoSection'
function App() {
 

  return (
    <> <div>
       <BlogsLayout></BlogsLayout>
       <TheEdgeLayout></TheEdgeLayout>
       <Team></Team>
       <div className='w-full'>
       <VideoSection></VideoSection>
       </div>
    </div>
    
    </>
  )
}

export default App
