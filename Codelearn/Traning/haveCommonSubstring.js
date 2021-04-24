function haveCommonSubstring(a, b, n){
    for(let i = n; i <= a.length; i++)
    {
        for(let j = 0; j <= a.length - i; j++)
        {
            let sub = a.substring(j, j + i);
            if(b.includes(sub)) return true;
        }
    }
    return false;
}
 