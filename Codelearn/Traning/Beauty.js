function beauty(arr){
    let limitA = 0;
    let limitB = 0;
    let count = 0;
    if (arr[2] === 0 && arr[3] === 0) return 0;
    if (arr[2] === 0) return arr[0];
    if (arr[3] === 0) return arr[1];
    if (arr[0] === 0 && arr[1] === 0) return 0;
    if (arr[0] === 0) return arr[3];
    if (arr[1] === 0) return arr[2];
    function plusA () {
        arr[0]--;
        limitA++;
        limitB = 0;
        count++;
    }
    function plusB () {
        arr[1]--;
        limitB++;
        limitA = 0;
        count++;
    }
    while ((arr[0] && arr[1]
    || (arr[0] == 0 && arr[1] > 0 && limitB < arr[3])
    || (arr[1] == 0 && arr[0] > 0&& limitA < arr[2]))) {
        if (arr[0] > arr[1]) {
            if ( limitA < arr[2]) {
                plusA();
            } else {
                plusB();
            }
        } else {
            if (limitB < arr[3]) {
                plusB();
            } else {
                plusA();
            }
        }
    }
    return count;
}
