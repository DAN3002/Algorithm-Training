function friendsGroup(n = 0, cf = []){
    if (!cf.length) {
        return 1;
    }
    let group = [cf.shift()];
    let j = 0;
    while (cf.length) {
        let oldLength = cf.length;
        for (let i = 0; i < cf.length; i++) {
            let a = group[j].includes(cf[i][0]);
            let b = group[j].includes(cf[i][1]);
            if (!(a && b) && (a || b)) {
                if (a) group[j].push(cf[i][1]);
                if (b) group[j].push(cf[i][0]);
                cf.splice(i, 1);
                i--;
            }
        }
        if (cf.length === oldLength) {
            j++;
            group.push(cf.shift());
        }
    }
    if (group.length) {
        return Math.max(...(group.map(ele => ele.length)));
    }
}
