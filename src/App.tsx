import { useState } from 'react'
import './App.css'
import Team from './Team'
import { randomizeTeams } from './utils';

function App() {
  const [entry, setEntry] = useState('sixty4')
  const [firstTeam, setFirstTeam] = useState({
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
  const [secondTeam, setSecondTeam] = useState({
    "name": "Mushroom Beasts",
    "members": [
        {
            "name": "donkey_kong",
            "franchise": "donkeyKong"
        }, 
        {
            "name": "yoshi",
            "franchise": "yoshi"
        } 
    ]
  });

  return (
    <>
      <h1>Smash Team Randomizer</h1>
      <select name='entry' id='entry-dropdown' onChange={
        e => { setEntry(e.target.value); 
          setTimeout(randomizeTeams, 10);
        }
        } >
        <option value='sixty4' selected>Smash 64</option>
        <option value='melee'>Melee</option>
        <option value='brawl'>Brawl</option>
        <option value='plus'>Project +</option>
        <option value='sm4sh'>Wii U</option>
        <option value='ultimate'>Ultimate</option>
        <option value='ssf2'>SSF2</option>
      </select>
      <div id='team-battle'>
        <Team 
        team={firstTeam} 
        entry={entry} 
        setTeamFunction = {setFirstTeam}/>
        <h1 id='vs'>VS</h1>
        <Team 
        team={secondTeam} 
        entry={entry}
        setTeamFunction = {setSecondTeam}/>
      </div>
    </>
  )
}

export default App
