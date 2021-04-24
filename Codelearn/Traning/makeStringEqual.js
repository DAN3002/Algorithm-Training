function makeStringEqual(a, b){
    let count = 0;
    let check = a.charAt(0) == b.charAt(0);
    for(let i = 1; i < a.length; i++)
    {
        if(a.charAt(i) == b.charAt(i))
        {
            if(!check)
            {
                check = true;
                count++;
            }
        } 
        else {
            if(check)
            {
                check = false;
            }
        }
    }
    return check ? count : count + 1;
}

