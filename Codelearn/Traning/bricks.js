function bricks(x, y){
    let delta = Math.pow(x + 4, 2) / 4 - 4 * (x + y)
    let z = (x + 4) / 2
    if(delta < 0){
        return [-1]
    }
    let a = (z - Math.sqrt(delta)) /2 
    let b = (z + Math.sqrt(delta)) /2 
    
    return [a,b]
}
