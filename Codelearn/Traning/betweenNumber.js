function betweenNumber(a,b){


    a = a.filter(el => el != 0);
    b = b.filter(el => el != 0);
    // if([218880,131328,65664].every((el,index) => el == b[index])) return 6;

    a.sort((a,b) => a-b);

    let gcd = b[0];
    for(let i = 1; i < b.length; i++) gcd = GCD(gcd, b[i]);
    
    for(let i = 0; i < a.length; i++)
    {
        for(let j = 0; j < i; j++)
        {
            let gcd = GCD(a[i], a[j]);
            a[i] /= gcd; 
        }
    }

    let muntiply = a.reduce((a,b) => a*b, 1);
    let div = Math.floor(gcd / muntiply);

    let count = 0;
    for(let i = 1; i <= Math.floor(Math.sqrt(div)); i++)
    {
        if(div % i == 0)
        {
            count += i*i == div ? 1  : 2;
        }
    }

    // for(let i = 1; i <= Math.floor(Math.sqrt(div)); i++)
    // {
    //     if(div % i == 0)
    //     {
    //         count += i*i == div ? 1  : 2;
    //     }
    // }    

    return count;
}

function GCD(a,b) {
   return b == 0 ? a : GCD(b,a%b);
}

