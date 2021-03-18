function badNumber(number){
    let current = null;
    let count = 0;
    number = [...number.toString()];
    
    for(let i of number){
        if(i == 3 || i == 1){
            if(current == null && i == 3) return false;
            if(current == i) return false;
            current = i;
            count++;
        }
    }
 
    return current != null && (count / 2) % 2 == 1;
}