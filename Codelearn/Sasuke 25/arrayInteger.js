function arrayInteger(a){
    a = a.sort((a,b) => a-b);
    let n = a.length;    
    let plus = 0;
    let count = 0;
    for(let i = 0; i < n; i++)
    {
        let el = a[i] + plus;
        if(el < i + 1)
        {
            plus += (i+1) - el;
            count += (i+1) - el + i;
        } else{
            count += el - (i+1);
        }
    }
    return count;
}
 