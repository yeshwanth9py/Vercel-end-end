export function generate(){
    const subset = "abcdefghijklmnopqrstuvwxyz1234567890";
    let op = "";
    for(let i=0; i<5; i++){
        op += subset[Math.floor(Math.random()*(subset.length))]
    }

    return op;
}
