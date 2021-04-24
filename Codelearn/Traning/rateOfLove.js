function rateOfLove(name){
    let str = (name[0] + name[1]).toLowerCase().replace(new RegExp(" ", "g"), "");
    str = countChar(str);

    while(str.length > 2 && str !== '100')
    {
        str = getNext(str);
    }

    return str;
}

function countChar(str)
{
    let out = "";
    while(str.length != 0)
    {
        let old = str.length;
        str = str.replace(new RegExp(str.charAt(0), "g"), "");
        out += old - str.length;
    }
    return out;
}

function getNext(str)
{
    let out = "";
    for(let i = 0; i < str.length - 1; i++)
    {
        out += (parseInt(str.charAt(i)) + parseInt(str.charAt(i + 1))) % 10;
    }
    return out;
}

