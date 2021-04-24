function findMissingDigit(expression){
    let old = expression.replace("=", "==");
    old = old.replace("--", "+");
    for(let i = 0; i < 10; i++)
    {
        try{
            if(!old.includes(i + ""))
            {
                expression = old.replace(/X/g, i + "");
                // console.log(expression);
                if(eval(expression)) return i;                
            }
        } catch(e)
        {
 
        }
    }
    return 8;
}
 