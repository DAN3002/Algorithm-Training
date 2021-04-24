function countCube(a){
    let count = 0;
    let map = new Set();
    for(let i = 0; i < a.length; i++)
    {
        let num1 = a[i];  
        if(isPowerOfThree(num1)) map.add(num1);
        for(let j = 0; j < a.length; j++)
        {                      
            if(j != i)
            {
                let num2 = a[j];
                if((num1 >= 0 && num2 >= 0) || (num1 < 0 && num2 < 0))
                {
                    let str = num1.toString().replace("-", "") + num2.toString().replace("-", "");
                    if(isPowerOfThree(Number(str))) map.add(Number(str));
                } else {
                    let str = "-" + num1.toString().replace("-", "") + num2.toString().replace("-", "");
                    if(isPowerOfThree(Number(str))) map.add(Number(str));                   
                }
            }
        }
    }
    return map.size;
}

function isPowerOfThree(n)
{
    return Number.isInteger(Math.cbrt(n));
}
