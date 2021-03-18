function mosquitoFly(arr,x){
    arr.sort((a,b) => a-b);
    let count = 0;
    for(let i of arr){
        if(i > x) break;
        else {
            x -= i;
            count++;
        }
    }
 
    return count == arr.length ? count : count+1;    
}