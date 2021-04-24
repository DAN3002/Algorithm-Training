function averageOfTheASCII(s){
    return parseFloat(([...s]
            .map(el => el.charCodeAt(0))
            .reduce((a,b) => a + b, 0) / s.length)
            .toFixed(1));
}
