function minimumSubset(N,X,a){
    a = a.map(getPrimeDivisor);

    let f = [];
    for(let i = 0; i <= X; i++){
        f.push(Array(X + 1).fill(X + 1))
    }

    f[0][0] = 0;
    for(let num of a){
        if(num[0] == 0 && num[1] == 0) continue;
        let cloneF = cloneMatrix(f);
        console.log(num)
        for(let i2 = 0; i2 <= X; i2++){
            for(let i5 = 0; i5 <= X; i5++){
                if(f[i2][i5] != X + 1){
                    const n2 = Math.min(X, i2 + num[0]);
                    const n5 = Math.min(X, i5 + num[1]);
                    console.log("---");
                    console.log("old", i2, i5);
                    console.log("new", n2, n5);
                    console.log(Math.min(f[n2][n5], f[i2][i5] + 1));
                    cloneF[n2][n5] = Math.min(f[n2][n5], f[i2][i5] + 1);
                }
            }
        }
        f = cloneF;
        console.log(f)
    }
    // console.log(f);
    return f[X][X] == X + 1 ? -1 : f[X][X];
}

function getPrimeDivisor(n){
    const primes = [2,5];
    let res  = Array(primes.length).fill(0);

    for(let i = 0; i < primes.length; i++){
        const prime = primes[i];
        while(n % prime == 0){
            res[i]++;
            n /= prime;
        }
    }

    return res;
}

function cloneMatrix(maxtrix){
    let out = [];
    for(let arr of maxtrix){
        out.push(Array.from(arr));
    }
    return out;
}