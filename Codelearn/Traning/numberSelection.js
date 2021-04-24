function numberSelection(a, b, d){
    let count = 0;    
    for(let i = 0; i <= d; i++)
    {
        let temp = d - a * i;
        if(temp >= 0 && Number.isInteger(temp/b)) count++;
    }
    return count;
}
