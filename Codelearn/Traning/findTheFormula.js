function findTheFormula(seq){
    let k = 1
    while(true)
    {
        let temp = k * seq[0];
        let b = seq[1] - temp;
        if(k * seq[1] + b === seq[2]) return makeFormula(k,"+",b);
        b = seq[1] + temp;
        if(k * seq[1] - b === seq[2]) return makeFormula(k,"-",b);
        b = temp / seq[1];
        if(Number.isInteger(b))
        {
            if((k * seq[1] / b) === seq[2]) return makeFormula(k,"/",b);
        }        
        k++;
    }
}

function makeFormula(k, cal, b)
{
    if(k === 1)
    {
        if(b === 0) return "n";
        if(cal === "/")
        {
            if(b === 1) return "n";
            if(b === -1) return "-n";
        }   
        return ("n" + cal + b).replace("+-", "-");
    }
    if(b === 0) return k + "n";
    if(cal === "/")
    {
        if(b === 1) return k + "n";
        if(b === -1) return "-" + k + "n";
    }
    return (k + "n" + cal + b).replace("+-", "-");   
}
