function pantsChoose(cost,m){
    cost.sort((a,b) => b-a);
    let count = 0;
    for(let i of cost){
        if(m >= i) {
            m -= i;
            count++;
        }
    }
    return count;
}