function numberOfMedals(result){
    result = result.map(str => {
        let map = str.match(/[0-9]+[P]/g);
        if(map == null) return 0;
        let max = 0;        
        for(let i = 0; i < map.length; i++)
        {
            max = Math.max(parseInt(map[i].substring(0, map[i].length - 1)), max);
        }
        return max;
    })
    .filter(el => el != 0)
    .sort((a,b) => b-a);
    let out = "";
    if(result[0] == result[1])
    {
        let old = result.length;
        result = result.filter(el => el != result[0]);
        out += old - result.length == 0 ? "" : (old - result.length) + "S";
        old = result.length;
        result = result.filter(el => el != result[0]);
        out += old - result.length == 0 ? "" : (old - result.length) + "B";        
    } else {
        out = "1G";
        result.shift();
        let old = result.length;
        result = result.filter(el => el != result[0]);
        out += old - result.length == 0 ? "" : (old - result.length) + "S";
        old = result.length;
        result = result.filter(el => el != result[0]);
        out += old - result.length == 0 ? "" : (old - result.length) + "B";        
    }
    return out;
}

