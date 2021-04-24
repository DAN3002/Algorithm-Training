function findLengthAndWidth(x, y){
    let total = x + y;
    for(let i = 3; i < total; i++)
    {
        if(total % i == 0)
        {
            let b = Math.floor(total/i);
            if((i-2)*(b-2) == y && 2*(i+b) - 4 == x) return [Math.max(i,b), Math.min(i,b)];
        }
    }
}
 