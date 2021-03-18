function prettyNumber(n){
    n = n.toString();
    const sum = [...n]
                .map(el => parseInt(el))
                .reduce((a,b) => a+b, 0);
    return (sum - n.length) % 9 == 0;
}