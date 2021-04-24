function findSafeHouse(n, x, y, houses){
    let min = -1;
    for(let i = 0; i < n; i++)
    {
        let house = houses[i];
        if(house[0] <= x && house[1] >= y)
        {
            if(min == -1) min = i;
            else {
                let currentHouse = houses[min];
                if(currentHouse[0] > house[0]) min = i;
                else if(currentHouse[0] == house[0])
                {
                    if(house[1] > currentHouse[1]) min = i;                    
                }
            }
        }
    }
    return min == -1 ? -1 : min + 1;
}
