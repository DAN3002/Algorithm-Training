function maxNumberArray(a){
    a = [...new Set(a)].sort((a,b)=>b-a);
    for (let i=  0; i < a.length - 1; i++){
        if (a[i]-1 !== a[i+1]) return a[i] - 1;
    }
    return a[a.length-1] - 1;
}
