function triangleAngle(a,b,c){
    const arr = [a,b,c];
    return !arr.some(el => el <= 0) && arr.reduce((a,b) => a+b, 0) === 180 ? "Right" : "Wrong";
}
