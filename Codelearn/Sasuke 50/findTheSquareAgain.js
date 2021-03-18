const map = new Set();

function findTheSquareAgain(a,b){
    let set = new Set();
    for(let i = 0; i <= 4; i += 2) {
        set.add(a[i] + "_" + a[i+1]);
        set.add(b[i] + "_" + b[i+1]);
    }

    if(set.size != 4) return false;

    const c1 = solve(a);
    const c2 = solve(b);

    if(!c1 || !c2) return false;

    return checkMap(c1, c2);
}

function solve(p) {
    const [x1, y1, x2, y2, x3, y3] = p;

    const l1 = length(x1, y1, x2, y2);
    const l2 = length(x1, y1, x3, y3);
    const l3 = length(x3, y3, x2, y2);

    map.add(l1);
    map.add(l2);
    map.add(l3);

    if(map.size != 2) return false;

    if(l1 == l2) return [x1,y1];
    if(l1 == l3) return [x2,y2];
    if(l3 == l2) return [x3,y3];
}

function length(x1, y1, x2, y2) {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
}

function checkMap(c1, c2) {
    if(map.size !== 2) return false;

    const [a, b] = Array.from(map).sort((a,b) => a-b);

    return 2*a == b && b == length(c1[0],c1[1], c2[0],c2[1]);  
}
