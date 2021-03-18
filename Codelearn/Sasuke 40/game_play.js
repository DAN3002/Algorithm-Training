function gamePlay(time){
    let count = 0;
    for(let i = 0; i < time.length - 1; i += 2){
        let diss = time[i+1] - time[i];
        if(diss >= 5) return true;
        count += diss;
    }
    return count >= 8;
}