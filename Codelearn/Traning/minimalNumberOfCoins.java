int minimalNumberOfCoins(int[] coins, int price)
{
    int count = 0;
    int i = coins.length - 1;
    while(price != 0 && i >= 0)
    {
        int coin = coins[i];
        count += price / coin;
        price %= coin;
        i--;
    }
    return count;
}
 