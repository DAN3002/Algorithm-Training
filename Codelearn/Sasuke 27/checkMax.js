function checkMax(str){
    return Math.max(...(Array.from(str).map((el,index) => str.charCodeAt(index))));
}
 