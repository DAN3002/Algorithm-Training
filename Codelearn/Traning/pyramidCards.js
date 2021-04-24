function pyramidCards(n) {
    const mol = 1e9 + 7;
    let sum = 0;

    for(let i = 1; i <= n; i++) {
        sum = (sum + i*2) % mol;
        sum = (sum + i-1) % mol;
    }
    return sum;
}
