function countAnagram(s, p){
    if(s.length < p.length) return 0;
    let count = 0;
    let len = p.length;
    let base = countChar(p);
    for(let i = 0; i <= s.length - len; i++)
    {
        let sub = s.substring(i, i + len);
        let countSub = countChar(sub);
        if(compare(base, countSub)) count++;
    }
    return count;
}

function compare(base, sub)
{
    let unknowCount = 0;
    for(let key of Object.keys(base))
    {
        let subCount = sub[key];
        if(subCount == undefined) unknowCount += base[key];
        let count = base[key];
        if(subCount < count) unknowCount += count - subCount;
    }
    return unknowCount <= sub['?'];
}

function countChar(str)
{
    let map = [];
    while(str.length != 0)
    {
        let first = str.charAt(0);
        let oldLength = str.length;
        if(first == '?') str = str.replace(new RegExp("\\?", "g"), "");
        else str = str.replace(new RegExp(first, "g"), "");
        map[first] = oldLength - str.length;
    }
    if(map['?'] == undefined) map['?'] = 0;
    return map;
}
