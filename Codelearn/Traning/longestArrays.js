function longestArrays(a){
    for(let i = a.length - 1; i >= 0; i--)
    {
        for(let j = 0; j < a.length - i; j++)
        {
            if(checkArray(a.slice(j, j+i + 1))) {                
                return i+1;
            }
        }
    }
    return 1;    
}

function checkArray(a)
{
    return a.every((el, index) => index == 0 || el >= a[index - 1]);
}
