import React from 'react'
import Navbar from './sections/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-screen bg-blue-600 w-full' id='about'></div>
      <div className='h-screen w-full bg-green-500' id='services'></div>
    </div>
  )
}

export default App