function countCustomer(a, b, arr){
    let c = 0;
    let count = 0;
    for(let i of arr)
    {
        if(i == 1)
        {
            if(a > 0) a--;
            else if(b > 0)
            {
                b--;
                c++;
            } else if(c > 0) c--;
            else count++;
        } else if(b > 0) b--;
        else count += 2;
    }
    return count;
}
 