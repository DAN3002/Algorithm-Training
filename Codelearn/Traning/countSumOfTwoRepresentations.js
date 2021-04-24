function countSumOfTwoRepresentations(n, l, r){
    let count = 0;
    for(let i = l; i <= r; i++)
    {
        if(i <= (n-i) && (n-i) <= r) 
        {
            count++;
        }
    }
    return count;
}
 