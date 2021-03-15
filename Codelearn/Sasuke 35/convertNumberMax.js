function convertNumberMax(n){
    n = [...n.toString()].map(el => parseInt(el));   
    max = Math.max(...n); 
    let index = n.findIndex(el => el < max);
    if(index != -1) n[index] = max;
    return Number(n.join(""));
}