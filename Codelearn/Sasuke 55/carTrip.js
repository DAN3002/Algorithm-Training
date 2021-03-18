function carTrip(arr,capacity){
    let f = Array(1e5 + 1).fill(0);
 
    for(const el of arr) {
        const [count, start, end] = el;
        f[start] += count;
        f[end] -= count;
    }
 
    let current = 0;
    for(const i of f) {
        current += i;
        if(current > capacity) {
            return false;
        }
    }
 
    return true;
}