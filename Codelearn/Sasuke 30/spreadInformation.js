function spreadInformation(a,k){
    a.sort((a,b) => a-b);
 
    let count = 1;
 
    let current = a[0] + k;
 
    for(let i = 1; i < a.length; i++)
    {
        if(a[i] > current)
        {
            count++;
            
        } 
        current = a[i] + k;
    }
 
    return count;
}