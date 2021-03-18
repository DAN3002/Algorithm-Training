function inDivisibleGroups(num){    
    num = [...num];

    if(num[0] === '-') num.shift();

    num = num.map(el => parseInt(el));
    const n = num.length;
    let count = 0;
    const last = num[n-1];

    const sum = num.reduce((a,b) => a + b, 0);

    if([0,2,4,6,8].includes(last)) count++;
    if(last == 0) count += 2;
    if(last == 5) count++;

    if(sum % 3 == 0) count++;
    if(sum % 9 == 0) count++;

    if(n < 2)  {
        const a = parseInt(num.join(''))
        if(a % 4 == 0) count++;
    } else if(parseInt(num.slice(-2).join('')) % 4 == 0) count++;

    if(n < 3)  {
        const a = parseInt(num.join(''))
        if(a % 8 == 0) count++;
    } else if(parseInt(num.slice(-3).join('')) % 8 == 0) count++;
    
    if(sum % 3 == 0 && [0,2,4,6,8].includes(last)) count++;


    const mod7 = num.reduce((a,b, index) => {
        if(index == n-1) return a;
        return (a*3 + (num[index+1] || 0)) % 7;
    }, num[0]);

    if(mod7 === 0) count++;

    return count;
    
}
