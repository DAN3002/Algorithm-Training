function duplicateNumber(arr){
    const map = new Map();

    for(const i of arr) {
        if (map.get(i)) {
            return i;
        }

        map.set(i, true);
    }
}
