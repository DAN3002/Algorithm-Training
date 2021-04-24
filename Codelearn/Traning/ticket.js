function ticket(a){
    a = a.sort((a,b) => a-b);
    if(a[0] != 1) return 1;
    let index = a.find((el, index) => index != 0 && a[index - 1] != el - 1);     
    return index == undefined ? a[a.length - 1] + 1 : index - 1;
}
 