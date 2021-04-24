function isHappyNumber(n){
    let map = [];
    while(true)
    {
        map.push(n);
        n = getNum(n);
        if(n == 1) return true;
        if(map.includes(n)) return false;
    }
}
 
function getNum(n)
{
    let str = n + "";
    let cal = 0;
    for(let i = 0; i < str.length; i++)
    {
        cal += Math.pow(parseInt(str.charAt(i)), 2);
    }
    return cal;
}
 