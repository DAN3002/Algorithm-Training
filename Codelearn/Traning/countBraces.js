function countBraces(s){
    if(s.length % 2 != 0) return -1;
    let open = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++)
    {
        if(s.charAt(i) === "{") open++;
        else {
            if(open === 0) 
            {
                open = 1;
                count++;
            } else open--;
        }
    }
    return count + Math.ceil(open/2);
}
 