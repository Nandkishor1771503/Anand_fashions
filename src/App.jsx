import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion'
import Hero from './components/Hero'

// primary
//  <h1 className='bg-[#654025] w-full h-36 text-[#d1b695] text-5xl '> Anand fashions</h1> 

// text 
//  <h1 className='bg-[#cbad89] w-full'>asdklfjlkasjdfl;jksadf </h1> 

//less
//  <p className='bg-[#e7e0d8] w-full' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore dolor, amet temporibus libero numquam enim beatae ad sint id fugiat eveniet pariatur delectus ipsum tempora quasi repellat quod? Dolor, ullam. </p> 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
    </>
  )
}

export default App
 