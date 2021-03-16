function palindromeTime(s){
    if(check(s)) return 0;

    s = s.split(":").map(el => parseInt(el));
    let count = 0;
    let current = s[0] * 60 + s[1];
    // console.log(current);

    // return convert(current);
    while(true){
        count++;
        current++;
        let str = convert(current);
        // console.log(str);
        if(check(str)) return count;
    }


}

function convert(time){
    let min = Math.floor(time / 60);
    if(min == 24) min = 0;
    time = time % 60;

    return min.toString().padStart(2, '0') + ":" + time.toString().padStart(2, '0');
}

function check(str){
    return [...str].reverse().join("") == str;
}
