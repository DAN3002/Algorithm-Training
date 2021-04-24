function maxNumberOfTerms(n){
    if(n == 1) return 1;
    while(true)
    {
        let denta = n*8 + 1;
        let square = Math.sqrt(denta);
        if(Number.isInteger(square))
        {
            return Math.floor(((-2 + square) / 2) + 1);
        }
        n--;
    }
}