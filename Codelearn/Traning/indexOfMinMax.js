function indexOfMinMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return [arr.indexOf(min), arr.indexOf(max)];
}
