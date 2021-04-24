function minMove(a,d){
    let current = a[0];
    let count = 0;
    for(let i = 1; i < a.length; i++){
        let el = a[i];
        while(el <= current){
            count++;
            el += d;
        }
        current = el;
    }

    return count;
}
