function depositProfit(deposit, rate, threshold){
    let count = 0;
    while(deposit < threshold)
    {
        deposit += deposit/100*rate;
        count++;
    }
    return count;
}
 