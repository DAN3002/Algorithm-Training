function birthdayGift(n, t){
    let out = Array(12).fill(0);
    t.map(el => {
        out[el - 1]++;
    });
    return out;
}
