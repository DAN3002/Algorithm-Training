function countCaseTriangle(a, b){
    return a <= 0 || b <= 0 ? 0 : (a + b) - Math.max(a - b, b - a) - 1;
}
 