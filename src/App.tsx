import { useState } from 'react'
import './App.css'
import Character from './Character'
import Team from './Team'
import * as xhr from './xhr'
import { getRandomTeam } from './utils'
import { characterTeam } from './interfaces'

function App() {
  const [count, setCount] = useState(0);
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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Team team={randomTeam} entry='sixty4'/>
      <button onClick={() => xhr.load('sixty4', getRandomTeam, setRandomTeam)}>Randomize!</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
