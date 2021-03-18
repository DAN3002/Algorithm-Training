function moveCandy(candy){
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0;
    for(let i of candy)
    {
        if(i == 1) c1++;
        else if(i == 2) c2++;
        else if(i == 3) c3++;
        else c4++;
    }
    // return c1 + "-" + c2 + "-" + c3 + "-" + c4;
    // if(c1 == c2) return c1;

    // if(c2 > c1)
    // {        
    //     c3 += c1;
    //     if(c4 >= c2 - c1) return c2;
    //     else if(c3 >= c2*2) return c1 + c2*2;
    //     else return -1;
    // }
    let count = c2;
    c1 -= c2;
    c3 += c2;
    c2 = 0;
    
    // if(c3 >= c1) return count + c1;

    let extra1 = get(c1, 0, c3, c4, count);

    c1 -= c3;
    count += c3;
    c4 += c3;
    c3 = 0;

    if(c3 >= c1) return extra1 == -1 ? c2 + c1 : Math.min(extra1, c2 + c1);
    else
    {
        c4 += c3;
        c1 -= c3;
        count += c3;
        if(c4 > c1)
        return extra1 == -1 ? c2 + c1*2 : Math.min(extra1, c2 + c1*2);
    }
    let extra2 = get(c1, 0, c3, c4, count);
    return Math.min(extra1 == -1 ? extra2 : extra1, extra2 == -1 ? extra1 : extra2) ;
}


function get(c1, c2, c3, c4, count)
{
    let mod = c1 % 3;
    c1 = Math.floor(c1/3);
    c3 += c1;
    count += c1*2;

    if(mod == 2)
    {
        count++;
        if(c4 >= 1) return count + 1;
        else if(c3 >= 2) return count + 2;        
        else return -1;
    } else if(mod == 1)
    {
        if(c3 >= 1) return count + 1;
        else if(c4 >= 2) return count + 2;
        else return -1;
    } else return count;
}
