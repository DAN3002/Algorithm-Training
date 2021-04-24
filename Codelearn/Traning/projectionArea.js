function projectionArea(arr){
    let sum = 0;

    sum += arr.reduce((a,b) => a + Math.max(...b), 0);

    const n = arr[0].length;
    for(let i = 0; i < n; i++) {
        let max = 0;
        for(let j = 0; j < arr.length; j++) {
            max = Math.max(max, arr[j][i]);
        }

        sum += max;
    }

    sum += n * arr.length;

    sum -= arr.reduce((a,b) => a + b.filter(el => el === 0).length, 0);

    return sum;
}
