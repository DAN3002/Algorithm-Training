function powerOfThreeNotNine(m, n){
    let nine = [];
    for(let i = 0; i <= 10; i++)
    {
        let pow = Math.pow(9,i);
        if(pow >= m)
        {
            if(pow <= n) nine.push(pow);
            else break;
        }
    }
    let count = 0;
    for(let i = 0; i <= 20; i++)
    {
        let pow = Math.pow(3,i);
        if(pow >= m)
        {
            if(pow <= n)
            {
                if(!nine.includes(pow)) count++;
            }else break;
        }
    }
    return count;
}
 