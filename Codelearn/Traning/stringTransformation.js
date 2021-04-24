function stringTransformation(s){
    let map = new Map();
    for(let i = 0; i < s.length; i++)
    {
        let c = s[i];
        map.set(c, (map.get(c) || 0)+ 1);
    }

    let sum = 0;
    sum += count(0, 'z', 'ero', map);
    sum += count(2, 'w', 'to', map);
    sum += count(4, 'u', 'for', map);
    sum += count(6, 'x', 'si', map);
    sum += count(5, 'f', 'ive', map);
    sum += count(3, 'r', 'thee', map);
    sum += count(1, 'o', 'ne', map);
    sum += count(8, 't', 'eigh', map);
    sum += count(7, 's', 'even', map);
    sum += count(9, 'e', 'nin', map);
    return sum;
}

function count(num, key, other, map)
{
    let count = map.get(key) || 0;
    for(let i = 0; i < other.length; i++)
    {
        let c = other[i];
        map.set(c, (map.get(c) || 0) - count);
    }    
    return count*num;
}
