function digitalNumber(lightStatus){
    let map = [
        ['***', "*.*", "*.*", "*.*", "***"],
        ['..*', '..*', '..*', '..*', '..*'],
        ['***', "..*", "***", "*..", "***"],
        ['***', "..*", "***", "..*", "***"],
        ['*.*', "*.*", "***", "..*", "..*"],
        ['***', "*..", "***", "..*", "***"],
        ['***', "*..", "***", "*.*", "***"],
        ['***', "..*", ".**", "..*", "..*"],
        ['***', "*.*", "***", "*.*", "***"],
        ['***', "*.*", "***", "..*", "***"],
    ];

    let out = "";
    let arr = [];
    for(let i = 0; i < lightStatus[0].length / 3; i++) arr.push([]);
    for(let str of lightStatus)
    {
        let cut = str.match(/.{3,3}/g);
        for(let i = 0; i < cut.length; i++)
        {
            arr[i].push(cut[i]);
        }
    }
    for(let a of arr)
    {
        out += map.findIndex(number => number.every((el,index) => a[index] == el));
    }
    return out;
}

