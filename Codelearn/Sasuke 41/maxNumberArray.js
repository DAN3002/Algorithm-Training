function maxNumberArray(a){
    a = Array.from(new Set(a));
    a.sort((a,b) => b-a);
    let max = a[0] - 1;
    for(let i = 1; i < a.length; i++){
        if(max != a[i]) return max;
        max--;
    }
 
    return max;
}