function ancientLanguage(s){
    let c1 = 0;
    let map = [];
    let total = 0;    
    for(let i = 0; i < s.length; i++)
    {
        let c = s.charAt(i);
        if(c == 'C') c1++;
        else if(c == 'O')
        {
            map.push(c1);
        } else 
        {
            total += map.reduce((a,b) => a+b,0);
        }
    }
    return total;
}
 