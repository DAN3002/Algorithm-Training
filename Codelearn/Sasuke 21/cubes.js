function cubes(a){    
    let sum = 0;
    for(let shape of a)
    {
        let cal = 1;
        for(let i of shape) 
        {
            cal *= i;
        }
        sum += cal;
    }
    let size = Math.cbrt(sum);
    if(sum == 0 || !Number.isInteger(size)) return -1;
    return size;
}
 