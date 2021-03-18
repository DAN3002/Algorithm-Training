function numberRainbows(colors){
    let count = 0;
    
    while(colors.length >= 7){
        colors.sort((a,b) => b-a);
        for(let i = 0; i < 7; i++) colors[i]--;
        colors = colors.filter(el => el > 0);
        count++;
    }
    console.log(colors);
    return count;
}