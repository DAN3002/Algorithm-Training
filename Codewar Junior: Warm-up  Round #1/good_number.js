function goodNumber(a){
    a = a.toString();
    return Number(a[a.length - 1]) + Number(a[a.length - 2]) == 10;
}