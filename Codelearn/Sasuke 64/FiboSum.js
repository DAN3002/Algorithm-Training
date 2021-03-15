function fiboSum(n){
    const fibos = [1];
    let x1 = 1, x2 = 2, fibo = 2, fiboSum = 1;
    do {
        fibos.push(fibo);
        fiboSum += fibo;

        fibo = x1 + x2;
        x1 = x2;
        x2 = fibo;
    } while(fiboSum <= n)

    while (fiboSum > n) {
        const diff = fiboSum - n;

        let i = 0;
        for(i = 0; i < fibos.length - 1; i++) {
            if (fibos[i + 1] > diff) {
                break;
            }
        }

        fiboSum -= fibos[i];
        fibos.splice(i, 1);
    }

    return fibos.length ? fibos : [-1];
}

