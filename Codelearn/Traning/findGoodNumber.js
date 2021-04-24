const f = [1];
let min = 3 ** 9;

function findGoodNumber(n){    
    for(let i = 1; i <= 8; i++) {
        f.push(f[i-1] * 3);
    }

    solve(0, 0, n);

    return min;
}

function solve(i, sum, n) {
    if(sum >= n && sum < min) {
        min = sum;
    }

    if(sum > min || i === f.length) {
        return;
    }

    solve(i + 1, sum + f[i], n);
    solve(i + 1, sum, n);
}


