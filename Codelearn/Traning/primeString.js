function primeString(s){
    let size = s.length;
    if(size == 1) return true;
    for(let i = 1; i <= Math.floor(Math.sqrt(size)); i++)
    {
        if(size % i == 0)
        {
            if(s.replace(new RegExp(s.substring(0, i), 'g'), "").length == 0) return false;
            if(i != 1 && s.replace(new RegExp(s.substring(0, (size/i)), 'g'), "").length == 0) return false;
        }
    }
    
    return true;
}
 