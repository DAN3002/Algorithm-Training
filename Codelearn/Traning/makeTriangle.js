function makeTriangle(a, b, c){
    let count = Math.max(Math.max(c+1-a-b, a+1-c-b),b+1-a-c);
    return count > 0? count : 0;
}
 