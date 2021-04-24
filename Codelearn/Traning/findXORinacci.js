function findXORinacci(a, b, n){
    if (n % 3 == 0) return a
    if (n % 3 == 1) return b
    if (n % 3 == 2) return a^b
}
 