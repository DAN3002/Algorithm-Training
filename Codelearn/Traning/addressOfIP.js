function addressOfIP(arr){    
    return arr.map(el => decode(el));
}

function decode(num)
{
    return num.toString(2)
                .padStart(32, '0')
                .match(/.{1,8}/g)
                .map(el => parseInt(el,2))
                .join(".");
}
