import Character from "./Character";
import { character, characterTeam } from "./interfaces"

type teamParam = { team: characterTeam, entry: string }

const Team = ({team, entry}:teamParam):JSX.Element => {
    let result:JSX.Element[] = team.members.map((m:character) =>
        <Character name = {m.name} franchise={m.franchise} entry={entry} />
    );
    return <><div className="fighter-team">{result}</div><h2>{team.name}</h2></>;
}

export default Team;