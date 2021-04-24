function reversePairSum(a){
    let sum = 0;
    a.map((el, index) => {a[index] = (el + "")});
    for(let str of a)
    {
        if(str.charAt(str.length - 1) != '0')
        {
            let re = reverse(str);
            if(str != re && a.some(el => el == re))
            {
                sum += parseInt(str);
            }
        }
    }
    return sum;
}
 
function reverse(str)
{
    return [...str].reverse().join("");
}
 