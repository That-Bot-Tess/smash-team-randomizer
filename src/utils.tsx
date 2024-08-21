import { characterTeam } from "./interfaces";

export const format = (word:string):string => {
    if (word.includes('_')){
        let wordList:string[] = word.split('_');
        let result:string = "";
        for (let w of wordList){
            result += w[0].toUpperCase() + w.slice(1);
            if (wordList.indexOf(w) != wordList.length - 1) result += " ";
        }
        return result;
    }
    else {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    }   
}

export const getRandomTeam = (teamList: any, callback:Function): void => {
    let count: number = teamList.teams.length;
    let result = teamList.teams[Math.floor(Math.random() * count)];
    console.log(result);
    callback(result);
}