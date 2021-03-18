function whoWouldWin(a,mouse,b){
    if(Math.abs(a) === Math.abs(b)) return 'The mouse has escaped';
 
    if(b > mouse && a < mouse) return "Cat A";
    if(a > mouse && b < mouse) return "Cat B";
 
    // a = Math.abs(a - mouse);
    // b = Math.abs(b - mouse);
 
    if(a < mouse && b < mouse) return a > b ? "Cat A" : "Cat B";
    return b > a ? "Cat A" : "Cat B";
}