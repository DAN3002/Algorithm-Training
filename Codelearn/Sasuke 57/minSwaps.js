function minSwaps(arr){
    let odd = 0, even = 0
    for(let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(i % 2 !== el % 2) {
            if(i % 2 !== 0) odd++;
            else even++;
        }
    }
 
    return odd == even ? even : -1;
}