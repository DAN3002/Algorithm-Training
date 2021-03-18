function maxLengMountain(a){
    let out = [];
    let old = 0;
    while(true)
    {
        let map = find(a,old);
        if(map.length > out.length && map.length >= 3)
        {
            let other = map.slice(-2);
            if(other[0] > other[1]) out = map;
        }
        if(old == a.length - 1) break;
        old++;
    }
    return out;    
    
}

function find(a, start)
{
    if(a[start] >= a[start + 1]) return [a[start]];
    let check = true;
    let out = [a[start]];
    start++;
    while(a[start - 1] < a[start] && start != a.length)
    {
        out.push(a[start]);
        start++;
    }
    while(a[start - 1] > a[start] && start != a.length)
    {
        out.push(a[start]);
        start++;
    }    
    // for(let i = start; i < a.length - 1; i++)
    // {
    //     if(check)
    //     {
    //         if(a[i  + 1] < a[i+1]) out.push(a[i]);
    //         else if(a[i] > a[i+1])
    //         {
    //             check = false;
    //             out.push(a[i]);
    //         } else return [a[start]];
    //     } else {
    //         if(a[i] > a[i+1]) out.push(a[i]);
    //         else if(a[i] <= a[i+1])
    //         {
    //             return out;
    //         }          
    //     }
    // }
    return out;
}

