function sumNumbersLargerAverage(a){
    const mean = a.reduce((a,b) => a+b, 0) / a.length;
    a = a.filter(el => el > mean);
    return a.length ? a.reduce((a,b) => a+b, 0) : -1;
}
