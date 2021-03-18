function balanceArray(arr){
    if(arr.length % 2 == 0) return false;
    let old = Array.from(arr);
    return arr.reverse()
                .every((el,index) => el == old[index]);
}