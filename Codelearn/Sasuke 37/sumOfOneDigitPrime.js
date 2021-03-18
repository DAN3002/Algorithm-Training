function sumOfOneDigitPrime(n){
    if(n < 7) return -1;
    let count = Math.floor(n/7);
    n = n % 7;
 
    switch(n){
        case 1: case 2: case 3: case 5: {
            count += 1;
            break;
        }
        case 6: case 4:{
            count += 2
            break;
        }
    }
    return count;
 
}