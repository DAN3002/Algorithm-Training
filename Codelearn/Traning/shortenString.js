function shortenString(s){
    let map = Array.from(s);
    while(map.length > 1)
    {
        let first =  map.slice(0,2);       
        if(first.includes("0"))
        {
            map = Array.from((parseInt(first[0]) + parseInt(first[1])) + "").concat(map.slice(2));
        } else map = Array.from((parseInt(first[0]) * parseInt(first[1])) + "").concat(map.slice(2));
    }
    return map[0];
}
 