function findSuitFactorial(x,y){
    const primes = getPrimeDivisor(x, y);
    console.log(primes);
 
    let out = 0;
    while(!primes.every(el => el[1] <= 0)) {
        out++;
        let i = out + 0;
 
        for(const el of primes) {
            const num = el[0];
            while(i % num == 0) {
                i /= num;
                el[1]--;
            }
        }
    }
 
    return out;
}
 
function getPrimeDivisor(k, y) {
    const out = [];
 
    for(let i = 2; i <= k; i++) {
        if(k % i == 0) {
            let count = 0;
            while(k % i == 0){