function henhouse(a,b,c,m){
    a = [[a, 0]];
    b = [[b, 0]];
    c = [[c, 0]];

    for(let i = 1; i <= m; i++) {
        a.forEach(el => el[1]++);
        b.forEach(el => el[1]++);
        c.forEach(el => el[1]++);

        a = a.filter(el => {
            if (el[1] === 20) {
                return false;
            }
            if (el[1] % 2 === 0) {
                c.push([el[0],1]);
            }
            return true;
        });
        b = b.filter(el => {
            if (el[1] === 10) {
                a.push([el[0], 1]);
                return false;
            }
            return true;
        });

        c = c.filter(el => {
            if (el[1] === 5) {
                b.push([el[0], 1]);
                return false;
            }
            return true;
        });
        // console.log('----');
        // console.log(a);
        // console.log(b);
        // console.log(c);
    }

    a = a.reduce((sum, i) => sum += i[0], 0);
    b = b.reduce((sum, i) => sum += i[0], 0);
    c = c.reduce((sum, i) => sum += i[0], 0);

    return [a,b,c];
}
