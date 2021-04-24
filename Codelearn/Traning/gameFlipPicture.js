function gameFlipPicture(a){
    let map = new Map();
    let half = a.length * a[0].length / 2;
    for(let i = 0; i < a.length; i++)
    {
        for(let j = 0; j < a[i].length; j++)
        {
            let el = a[i][j];
            if(el > half) return false;
            let cal = map.get(el) || 0;
            if(cal == 2) return false;
            map.set(el, cal+1);
        }
    }
 
 
    let out = true;
    map.forEach((el, key) => {
        if(el != 2) out = false;
    });
    return out;
}
 