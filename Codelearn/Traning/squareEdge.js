function squareEdge(a){
    return Math.max(1, ...a.map(el => Math.abs(el[0]) + Math.abs(el[1])));
}
