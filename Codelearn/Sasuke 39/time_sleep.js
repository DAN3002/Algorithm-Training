function timeSleep(x){
    let time = 0;
    for(let i = 0; i < x.length; i += 2){
        time += x[i + 1] - x[i];
    }
 
    return time < 6;
}