function minimumTowers(arr){
    let f = [];
    for(let i of arr){
        const index = f.findIndex(el => el > i);
 
        if(index == -1) f.push(i);
        else f[index] = i;
    }
    return f.length;
}