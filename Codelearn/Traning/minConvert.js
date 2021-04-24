function minConvert(n,m){
    if(n == 0 && m !== 0) return -1;
    if(n >= m) return n-m;

    let count = 0;
    while(n < m) {
        if(m %  2 == 0) {
            m = Math.floor(m/2);
        } else {
            m++;
        }
        count++;
    }

    return count + (n-m);
}
