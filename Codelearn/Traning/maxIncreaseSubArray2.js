function maxIncreaseSubArray2(arr){
    const f = Array(arr.length);
    let res = 0;
    let out = [];

    for(let [i, el] of arr.entries()){
        let max = [el];
        for(let j = 0; j < i; j++) {
            if(arr[j] < el) {
                if(f[j].length + 1 > max.length) max = f[j].concat([el]);                
            }
        }

        f[i] = max;

        if(f[i].length > res) {
            res = f[i].length;
            out = f[i];
        }
    }

    console.log(f);
    return out;
}
