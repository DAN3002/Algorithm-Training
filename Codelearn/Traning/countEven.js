function countEven(s){ 
    let str = "02468";
    let count = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(str.includes(s.charAt(i)))
        {
            count += i + 1;
        }
    }
    return count;
}
 