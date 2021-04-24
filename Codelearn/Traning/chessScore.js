function chessScore(arr){
    const point = {
        't': 1,
        'M': 3,
        'T': 3,
        'X': 5,
        'H': 9,
        'V': 0,
    };

    return arr.map(el => point[el])
                .reduce((a,b) => a+b, 0);
}
