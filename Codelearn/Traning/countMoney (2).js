function countMoney(moneyToBuy){
    let map = [500000, 200000, 100000, 20000, 10000, 5000, 2000, 1000];
    let count = 0;
    for(let i = 0; i < map.length; i++)
    {
        if(map[i] > moneyToBuy) continue;
        count += Math.floor(moneyToBuy / map[i]);
        moneyToBuy %= map[i];
    }
    return count;
}
 