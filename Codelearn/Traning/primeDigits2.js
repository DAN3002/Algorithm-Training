function primeDigits(n){
    let arr = [];
    arr.length = n + 1;
    arr.fill(true);
    let count = 0;

    for(let i = 2; i <= n ; i++)
    {
        if(arr[i] == true)
        {
            if(check(i)) count++;
            for(let j = i*i; j <= n; j += i)
            {
                arr[j] = false;
            }
        }
    }   
    return count;    
}

function check(i)
{
    let digits = ['2','3','7','5'];
    let str = i + "";
    for(let j = 0; j < str.length; j++)
    {
        if(!digits.includes(str.charAt(j))) return false;
    }
    return true;
}

