function luckyNumber(arr){
    const minRow = getMinRow(arr);

    const n = arr.length;
    for(const [i, el] of minRow.entries()) {
        let check = true;
        const min = arr[i][el];
        for(let j = 0; j < n; j++) {
            if(arr[j][el] > min) {
                check = false;
                break;
            }
        }

        if (check) {
            return min;
        }
    }

    return -1;
}

function getMinRow(arr) {
    let out = [];

    const n = arr[0].length;
    for(let a of arr) {
        let minIndex = 0;
        for(let i = 1; i < n; i++) {
            if(a[i] < a[minIndex]) {
                minIndex = i;
            }
        }

        out.push(minIndex);
    }

    return out;
}
