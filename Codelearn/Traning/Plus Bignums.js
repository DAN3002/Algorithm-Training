function summary(arr){
    let out = '';
    for(const str of arr) {
        out = plusString(out, str);
    }
    return out;    
}

function plusString(s1, s2) {
    const maxLength = Math.max(s1.length, s2.length);

    s1 = s1.padStart(maxLength, '0');
    s2 = s2.padStart(maxLength, '0');

    let remain = 0;
    let out = '';
    for(let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(s1[i]) + parseInt(s2[i]) + remain;
        remain = sum < 10 ? 0 : 1;
        sum %= 10;

        out = sum.toString() + out;
    }
    if(remain) out = remain.toString() + out;

    return out[0] === '0' ? out.substring(1) : out;
}
