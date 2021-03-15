function division(arr){
    const n = arr.length;
    if(n <= 2) return arr.join('/');

    arr = arr.map(el => el.toString());
    arr[1] = '(' + arr[1];
    arr[n-1] = arr[n-1] + ')';

    return arr.join('/');
}
