function gameOfMaximization(arr){
    let min = null;

    for(let i = 0; i < 3; i++) {
      let sum = 0;
      for(let j = i; j < arr.length; j += 3) {
        sum += arr[j];
      }
      min = min ?  Math.min(min, sum) : sum;
    }

    return min * 3;
}
