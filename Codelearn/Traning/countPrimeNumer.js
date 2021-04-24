function countPrimeNumer(a,b){
    let map = Array(b + 1).fill(true);
    let count = 0;
    for(let i = 2; i <= b; i++)
    {
        if(map[i])
        {
            if(i >= a) count++;
            for(let j = 2*i; j <= b; j += i) map[j] = false;
        }
    }
    return count;
}