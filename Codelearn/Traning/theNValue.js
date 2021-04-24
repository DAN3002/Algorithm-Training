function theNValue(n){
    if(n < 0) return 0;
    let arr = [...n.toString()].map(el => parseInt(el));

    for(let i = 1 ; i < arr.length; i++ ){
        const el = arr[i];

        arr[i] = el == 9 ? 0 : el + 1;
    }

    return parseInt(arr.join(""));
}
