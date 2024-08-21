export const load = (entry:string, callback:Function, nestedCallback:Function): any => {
    let xhr = new XMLHttpRequest();
    let url = `data/teams-${entry}.json`;
    xhr.onload = e => {
        return callback(JSON.parse((e.target as XMLHttpRequest).responseText), nestedCallback);
    }
    xhr.onerror = () => {
        console.log("Operation failed.");
    }
    xhr.open("GET", url);
    xhr.send();
}