function generousMan(n, m){
    let count = 1;
    let check = true;
    while(true)
    {
        if(check)
        {
            if(n < count) return 'Van';
            n -= count;
            check = false;
        } else {
            if(m < count) return 'Viet';
            m -= count;
            check = true;
        }
        count++;
    }
}
