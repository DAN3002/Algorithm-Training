function countCaseWins(n){
    let k = (n-1)/2 + 1;
    return getPermute(n)/(getPermute(k)*getPermute(n-k));
}

function getPermute(n)
{
    let permute = 1;
    for(let i = 1; i <= n; i++) permute *= i;
    return permute;
}
