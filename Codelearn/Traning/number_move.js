function numberMove(a){
    let mode = a < 0 ? -1 : 1;
    a = Array.from(Math.abs(a).toString());
    let temp = a[0];
    a.shift();
    a.push(temp);

    return Number(a.join("")) * mode;

}
