function nameOfOx(t,s){
    let index = 0;
    for(let i of s)
    {
        if(i == t[index]) index++;
        if(index == t.length) return true;
    }
    return false;
}