function migratoryBirds(list_of_birds){
    const map = list_of_birds.reduce((map, i) => map.set(i, (map.get(i) || 0) + 1), new Map());
    
    let res = 0, max = -1;
    map.forEach((count, key) => {
        if(max <= count) {
            res = max === count ? Math.min(res, key) : key;
            max = count;
        }
    });

    return res;
}
