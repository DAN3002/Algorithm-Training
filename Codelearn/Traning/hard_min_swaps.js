function hardMinSwaps(arr){
    let count = 0;
    const map = arr.reduce((map, el, index) => map.set(el, index + 1), new Map());
    
    for(let i = 1; i <= arr.length; i++) {
        const index = map.get(i);

        if (index !== i) {
            let other = arr[i-1];
            
            arr[i - 1] = i;
            arr[index - 1] = other;

            map.set(i, i);
            map.set(other, index);

            count++;
        }
    }
    
    return count;
}
