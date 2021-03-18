function soundSpectra(m,a){
    const arr = [];
    for(let i = 0; i < m; i++) {
        arr.push(Array(a.length).fill('.'));
    }
 
    for(const [index, l] of a.entries()) {
        for(let i = 1; i <= l; i++) {
            arr[m - i][index] = '#';
        }
    }
 
    return arr.map(el => el.join(''));
}