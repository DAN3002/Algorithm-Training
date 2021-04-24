function survivalGame(k,t,s){
    let time = Math.floor(t / 6);
    let max = s + 0;
    for(let i of k)
    {
        if(i <= s) s -= i;
        else {
            if(i - s > max) return true;
            const left = Math.ceil((i-s)/3);
            time -= left;
            if(time < 0) return true;
            s = s + left*3 - i;
        }
    }
    return false;
}
