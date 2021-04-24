function compareVirus(s1, s2){
    if(s1.length != s2.length) return false;
    if(s1 === s2) return false;
    let lastIndex = -1;
    let check = false;
    for(let i = 0; i < s1.length; i++)
    {
        if(s1.charAt(i) != s2.charAt(i))
        {
            if(check) return false;
            if(lastIndex === -1)
            {
                lastIndex = i;
            } else {
                if(s1.charAt(lastIndex) === s2.charAt(i) && s1.charAt(i) === s2.charAt(lastIndex))
                {
                    check = true;
                } else return false;
            }
        }
    }
    return check;
}
