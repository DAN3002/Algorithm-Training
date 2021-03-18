function powerOfBrain(a){
    if(a.length == 1) return [1,0];
    if(a.length == 2) 
    {
        if(a[0] > a[1]) return [2, a[0]];
        else return [1, a[1]];
    }


    let n = a.length;
    let gcdMap = [a[0]];
    let gcd = a[0];
    for(let i = 1; i < a.length; i++)
    {
        gcd = GCD(gcd, a[i]);
        gcdMap.push(gcd);
    }

    let max = 0;
    let maxGCD = 0;
    for(let i = 0; i < n - 1; i++)
    {
        let current = i == 0 ? a[1]: gcdMap[i - 1];
        for(let j = i + 1; j < n; j++)
        {
            current = GCD(current, a[j]);
        }
        if(current > max)
        {
            maxGCD = i + 1;
            max = current;
        }
    }

    if(max < gcdMap[n-2])
    {
        max = gcdMap[n-2];
        maxGCD = n;
    }

    return [maxGCD, max];
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}
