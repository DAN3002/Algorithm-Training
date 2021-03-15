function jumpingGame(arr, h, t){
    for(let i of arr)
    {
        if(i > h) return false;
        h += t;
    }
    return true;
}
 