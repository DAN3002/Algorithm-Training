function diagonalLine(arr){
    if(arr.length == 0) return '-1';
    const n = arr[0].length;
    if(arr.length !== n || !arr.every(el => el.length === n)) return '-1';

    let out = '';

    for(let i = 0; i < arr.length; i++) {
        out += arr[i][i];
    }

    out += ' ';

    for(let i = 0; i < arr.length; i++) {
        out += arr[i][n-1-i];
    }

    return out;
}
