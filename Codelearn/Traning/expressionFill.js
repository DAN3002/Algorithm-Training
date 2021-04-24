function expressionFill(str){
    return recursive(str, 0);
}

function recursive(str, start)
{
    if(validateZero(str)) return 'undefined';

    if(!str.match(/[a-z]/g))
    {
        if(test(str)) return str;
    }
    for(let i = start; i < str.length; i++)
    {
        if(!"0123456789/+-*=".includes(str[i]))
        {
            for(let j = 0; j <= 9; j++)
            {
                if(!str.includes(j.toString()))
                {
                    let newStr = str.replace(new RegExp(str[i], "g"), j.toString());
                    let result = recursive(newStr, i + 1);
                    if(result != 'undefined') return result;                    
                }
            }
        }
    }
    return 'undefined';
}

function test(str)
{
    if(str.includes("/"))
    {
        str = str.split(/[\+\-\*\=\/]/g);
        return Math.floor(parseInt(str[0]) / parseInt(str[1])) == parseInt(str[2]);
    }
    return eval(str.replace("=", "=="));
}

function validateZero(str)
{
    str = str.split(/[\+\-\*\=\/]/g);
    return str.some(el => el.length > 1 && el[0] == '0');
}
