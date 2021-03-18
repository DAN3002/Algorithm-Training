function encodefunc(y){
    let cal = 1;
    while(cal != y){
        if(cal == sum(y-cal)) return y - cal;
        cal++;
    }
}
 
function sum(x){
    return [...x.toString()]
            .map(el => parseInt(el))
            .reduce((a,b) => a+b);    
}