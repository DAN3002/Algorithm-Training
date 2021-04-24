function pairOfShoes(shoes){
    let left = [], right = [];
    for(let shoe of shoes)
    {
        if(shoe[0] == 0) left.push(shoe[1]);
        else right.push(shoe[1]);
    }    
 
    if(left.length != right.length) return false;
 
    right.sort((a,b) => a-b);
    left.sort((a,b) => a-b);
 
 
    return left.every((element, index) => element == right[index] );
}
 