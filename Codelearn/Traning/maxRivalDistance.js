function maxRivalDistance(students){
    let min = Math.min(students[2], students[3]);
    let max = Math.max(students[2], students[3]);
    let n = students[0];
    let x = students[1];
    if(min < x)
    {
        x -= min - 1;
        min = 1;
    } else return max - min + x;
    if((n - max) < x)
    {
        max = n;
        return max - min;
    } else return (max + x) - min;
}
 