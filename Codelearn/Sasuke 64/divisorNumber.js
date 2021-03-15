function divisorNumber(l,r,d) {
    if(d >= l) {
        return Math.floor(r / d + 1)*d;
    }

    return d;
}
