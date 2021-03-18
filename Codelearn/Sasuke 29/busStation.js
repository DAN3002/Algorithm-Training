function busStation(t, d, a){
    let max = 0;
    let index = 1;
    let countMax = null;
    while(a.length != 0)
    {
        let old = a.length;
        a = a.filter(el => el > t);
        let count = old - a.length;
        if(!countMax || count > countMax)
        {
            max = index;
            countMax = count;
        }
        t += d;
        index++;
    }
    return max;
}
 