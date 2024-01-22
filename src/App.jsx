import React from 'react'
import Home from './components/Home/Home'
import { useState } from 'react'
import GamePage from './components/Home/GamePage/GamePage'


const App = () => {
  const [isGameStarted, setIsGameStarted] =useState(false)

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=> !prev);
  }
  return (
    <div>
      {isGameStarted ? <GamePage/> : <Home
      toggle={toggleGamePlay}
      />}
    </div>
  )
}

export default App
