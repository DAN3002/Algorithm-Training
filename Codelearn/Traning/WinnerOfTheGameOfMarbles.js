function winnerOfTheGameOfMarbles(a, b){    
    if(a == 0 || b == 0) return 1.000000;
    let sum = 0;
    if(b == 1)
    {
        sum = a/(a+b);
    } else {
        // b = b%2 == 0 ? b : b -1; 
        sum += a/(a+b);
        for(let i = 3; i <= b; i += 2)
        {
            let cal = 1;
            let n = b;
            for(let j = 1; j < i; j++)
            {
                cal *= n/(a+n);
                n--;
            }
            cal *= (a/(a+n));
            sum += cal;
        }        
    }
    return sum.toFixed(6);
}
 