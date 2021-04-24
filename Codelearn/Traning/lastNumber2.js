function lastNumber(n){
    let current = n % 10;
    let set = new Set([current]);
    while(true)    
    {
        current = (current * n) % 10;
        let size = set.size;
        set.add(current);
        if(size == set.size) return Array.from(set).sort((a,b) => a-b);
    }
    
}
