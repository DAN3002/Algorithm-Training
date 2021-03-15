function checkMax(str){
    return Math.max(...Array.from(str).map(el => (el + "").charCodeAt(0)));
}
 