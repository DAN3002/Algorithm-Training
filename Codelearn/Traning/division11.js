function division11(s){
    let sum = 0;
    for(let i = 0; i < s.length; i += 2)
    {
        sum += parseInt(s.charAt(i));
    }
    for(let i = 1; i < s.length; i += 2)
    {
        sum -= parseInt(s.charAt(i));
    }    
    return sum % 11 == 0;
}
 