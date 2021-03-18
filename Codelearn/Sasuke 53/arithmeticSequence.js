function arithmeticSequence(arr){
    const cache = Array.from(arr);
    arr.sort((a,b) => a-b);

    if(checkArr(arr)) {
        const n = cache.filter((el,index) => el !== arr[index]).length;
        if(n == 2) return true;
        if(n == 0 && (new Set(arr)).size !== arr.length) return true;
    }

    arr.sort((a,b) => b-a);
    if(checkArr(arr)) {
        const n = cache.filter((el,index) => el !== arr[index]).length;
        if(n == 0 && (new Set(arr)).size !== arr.length) return true;
        if(n == 2) return true;
    }

    return false;
}

function checkArr(arr) {
    const d = arr[1] - arr[0];

    return arr.every((el, index) => index == 0 || el - arr[index-1] == d);
}

