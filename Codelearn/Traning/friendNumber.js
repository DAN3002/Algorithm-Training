function friendNumber(num1, num2){
    return sumDiv(num1) == num2 && sumDiv(num2) == num1 ? "YES" : "NO";
}

function sumDiv(n)
{
    let sum = 0;
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++)
    {
        if(n % i == 0)
        {
            let other = n / i;
            sum += other == i ? i : other + i;            
        }
    }
    return sum - n;
}
