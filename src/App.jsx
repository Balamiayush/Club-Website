import React from 'react'
import Hero from './pages/Hero'
import Page2 from './pages/Page2'
import About from './pages/About'
import Ourteam from './components/Ourteam'
import Page4 from './components/page4'
const App = () => {
  
  return (

    <div className='w-full bg-[#fff]  overflow-x-hidden relative   '>
      <Hero/>
      <Page2/>
      <About/>
      <Ourteam/>
      <Page4/>
    </div>
    
  )

}

export default App