function findDifferent(str_1,str_2){
    const map1 = [...str_1]
                    .reduce((map, el) => map.set(el, true), new Map());
    const map2 = [...str_2]
                    .reduce((map, el) => map.set(el, true), new Map());

    const res = [];

    res.push(checkMap(map1, map2));
    res.push(checkMap(map2, map1));

    return res.every(el => !el.length) ? ['-1'] : res.filter(el => el.length);
}

function checkMap(map1, map2) {
    const out = [];
    map1.forEach((check, el) => {
        if (!map2.get(el)) {
            out.push(el);
        }
    });

    return out.sort().join('');
}
