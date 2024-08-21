type characterParam = { name: string, franchise:string, entry:string };
import * as utils from "./utils";

const Character = ({name, franchise, entry}:characterParam,):JSX.Element => {
    let imgUrl:string = `./images/${entry}/${name}.png`;
    let franchiseUrl:string = `./images/franchises/${franchise}.png`;

    return <div className="fighter"><h3>{utils.format(name)}</h3>
    <img src={imgUrl} className="fighter-render"/>
    <img src={franchiseUrl} className="franchise"/>
    </div>;
}

export default Character;