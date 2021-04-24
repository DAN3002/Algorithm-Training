function leastNumOfCubes(n){
    let cubes = [];

    for(let i = 1; i <= Math.floor(Math.cbrt(n)); i++) cubes.push(Math.pow(i, 3));

    let f = Array(n + 1).fill(-1);
    f[0] = 0;

    for(let i = 1; i <= n; i++){
        let min = null;
        for(let cube of cubes){
            if(i - cube >= 0 && f[i - cube] != -1){
                min = !min ? f[i - cube] : Math.min(min, f[i - cube]);
            }
        }
        f[i] = min + 1;
    }

    return f[n];
}
