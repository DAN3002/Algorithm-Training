function lineLength(arr){
    const [x1, y1, x2, y2] = arr;
    let out = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    return parseFloat(out.toFixed(2));
}s
