function countDigits(arr){
    return arr.map(el => solve(el));
}

function solve(n) {
    const l = n.toString().length;
    const x = parseInt(n.toString()[0]);

    return (x-1)*10 + (l+1)*l/2;
}
