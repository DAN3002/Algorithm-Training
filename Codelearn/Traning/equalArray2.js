function equalArray2(arr){
    arr.sort((a,b) => a-b);    
    const median = arr[Math.floor(arr.length / 2)];

    return arr.reduce((a,b) => a + Math.abs(b - median), 0);
}

