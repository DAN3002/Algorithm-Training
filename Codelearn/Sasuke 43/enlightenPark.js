function enlightenPark(m,n){
    let cal = Math.min(Math.ceil(m/2)*n, Math.ceil(n/2)*m);
 
    if(n % 2 != 0 && m % 2 != 0) return cal - Math.floor(Math.min(m,n)/2);
 
    return cal;
}