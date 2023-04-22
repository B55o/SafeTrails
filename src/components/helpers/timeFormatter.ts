export function timeFormat(time: string[]){
    let resultArr: string[] = []
    time.forEach((element) => {
        const newEl = element.split("-").join(".");
       resultArr.push(newEl.slice(5));
    })
    return resultArr;
}