function squareAllNumbers(n){
    const sign = n / Math.abs(n);
    return sign * parseFloat(
        [...Math.abs(n).toString()]
            .map(el => el !== '.' ? parseInt(el) ** 2 : '.')
            .join('')
    );
}
