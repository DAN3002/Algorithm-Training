function desktopSorted(File,Memory,n){
    if (File.length !== Memory.length) {
        return [];
    }

    if (Memory.some(el => el <= 0)) {
        return [];
    }

    const arr = File.map((el, index) => [el, Memory[index]]);
    const sort = n % 2 === 0 ? 1 : -1;

    return arr.sort((a,b) => {
        if (a[1] === b[1]) {
            return b[0].localeCompare(a[0]);
        }
        return sort * (a[1] - b[1]);
    })
    .map(el => el[0]);
}
