function deleteArray(a){
    return a.filter((el,index) => index != a.length - 1 && a[index+1] < el).length <= 1;
}
 