function subsetSumIsZero(l){    
    l = l.sort((a,b) => a-b);

    if(l[0] === 0) {
        return true;
    }

    if(l[0] > 0 || l[l.length - 1] < 0) {
        return false;
    }

    return find(l, 0, 0);
}

function find(map, start, sum)
{   
    if(sum > 0 && map[start] > 0) {
        return false;
    }

    for(let i = start; i < map.length; i++)
    {
        if(map[i] + sum === 0) return true;
        let check = find(map,i + 1 ,sum + map[i]);
        if(check) return true;
    }

    return false;
}
