function breakTime(scores){
    let a = 0, b = 0;
    let max = scores[0];
    let min = scores[0];

    for(let i of scores) {
        if(i < min) {
            min = i;
            b++;
        }

        if(i > max) {
            a++;
            max = i;
        }
    }

    return [a,b];
}
