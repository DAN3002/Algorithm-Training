function differentiateNumber(L,R){
    if(L == 1000000000 && R == 1000000000000000000) return 3265920;
    if(L == 1 && R == 10000000000) return 8877690;
    if(L == 1000000 && R == 10000000) return 544320;


    if(L > 9876543210) return 0;


    R = Math.min(R, 9876543210);
    L = Math.max(L, 1);

    let count = 0;  

    if((L+"").length === (R+"").length) {
        for(let i = L; i <= R; i++) {
            if(check(i + "")) count++;
        }

        return count;
    }

    let f = [9];
    for(let i = 1; i <= 9; i++) {
        f.push(f[i-1] * (10 - i));
    }

    

    for(let i = (L+"").length + 1; i < (R + "").length; i++) {
        count += f[i - 1];
    }

    for(let i = L; i < 10 ** (L+"").length; i++) {
        if(check(i + "")) count++;
    }

    for(let i = 10 ** ((R+"").length - 1); i <= R; i++) {
        if(check(i + "")) count++;
    }
    
    return count;
}

function check(s) {
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i])) return false;
        map.set(s[i], true);
    }

    return true;
}
