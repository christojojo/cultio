import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import UnderConstruction from './Components/UnderConstruction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header></Header> */}
    <UnderConstruction/>
    {/* <Banner></Banner>
    <div className='text-white flex items-center just-fy-center w-full text-3xl bg-green-600 h-dvh'>  
      welcome
    </div> */}
    
    </>
  )
}

export default App
