function setOEequations(numbers){
    let d = numbers[0]*numbers[4] - numbers[1]*numbers[3];
    let dx = numbers[2]*numbers[4] - numbers[5]*numbers[1];
    let dy = numbers[0]*numbers[5] - numbers[3]*numbers[2];
    if( d ==0){
        if(dx + dy == 0){
            return "Infinities";
        }else{
             return "Can't not solve";
        }
    } else{
         return dx/d +","+dy/d;
    }
}
 
 
 