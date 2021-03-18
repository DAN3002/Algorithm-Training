function longestArray(a){
    if(a.every(el => el == 1)) return 0;
    let max = Math.max(...a);
    let map = Array(max + 1).fill(0);
 
    for(let num of a)
    {
        map[num]++;
        for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++)
        {
            if(num % i == 0)
            {
                map[i]++;
                if(i*i != num) map[num/i]++;    
            }
        }
    }
    // return map;
    return Math.max(1, ...map);
 
}