import { useState } from 'react'
import './App.css'
import Team from './Team'
import * as xhr from './xhr'
import { getRandomTeam } from './utils'

function App() {
  const [randomTeam, setRandomTeam] = useState({
    "name": "Mario Brothers",
    "members": [
        {
            "name": "mario",
            "franchise": "superMario"
        }, 
        {
            "name": "luigi",
            "franchise": "superMario"
        } 
    ]
  });

  return (
    <>
      <h1>Smash Team Randomizer</h1>
      <Team team={randomTeam} entry='sixty4'/>
      <button onClick={() => xhr.load('sixty4', getRandomTeam, setRandomTeam)}>Randomize!</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
