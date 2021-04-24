function pickCandies(candies){
    if(candies.length == 0) return 0;
    let f = Array(candies.length);
    f[0] = candies[0];
    f[1] = Math.max(candies[1], candies[0]);
    for(let i = 2; i <= candies.length - 1; i++)
    {
        f[i] = Math.max(f[i - 1], candies[i] + f[i - 2]);
    }
}
    return f[candies.length - 1];
 