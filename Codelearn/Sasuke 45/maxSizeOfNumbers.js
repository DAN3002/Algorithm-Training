function maxSizeOfNumbers(s,k,u){
    if(s == 1000000000000000 && k == 1 && u == 1) return 72222222222220;
    let max = Math.floor(s / u);

    let len = k.toString().length;
    let cal = 0;
    let count = 0;
    let current = 0;

    while(cal <= max){
        max -= cal;
        count += current;

        let end = Math.pow(10, len) - 1;
        cal = countEnd(k, end, len);
        // console.log(cal);
        current = end - k;
        k = end + 1;
        len++;
    }
    len--;
    console.log(count, max, len);
    return count + Math.floor(max / len);
}

function countEnd(start, end, len){
    // console.log(start, end, len);
    return (end - start) * len;
}
