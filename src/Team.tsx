import Character from "./Character";
import { character, characterTeam } from "./interfaces"
import { getRandomTeam } from "./utils";
import * as xhr from "./xhr";

type teamParam = { team: characterTeam, entry: string, setTeamFunction: Function }

const Team = ({team, entry, setTeamFunction}:teamParam):JSX.Element => {
    let result:JSX.Element[] = team.members.map((m:character) =>
        <Character name = {m.name} franchise={m.franchise} entry={entry} />
    );
    return <div className="team">
        <div className="team-characters">{result}</div>
        <h2>{team.name}</h2>
        <button onClick={() => {xhr.load(entry, getRandomTeam, setTeamFunction); }}>Randomize!</button>
    </div>;
}

export default Team;