function numberLucky(s){
    while(s.length != 1)
    {
        s = getRoot(s);
    }
    return s;
}
 
function getRoot(str)
{    
    let sum = 0;
    for(let i = 0; i < str.length; i++) sum += parseInt(str.charAt(i));
    return sum + "";
}
 