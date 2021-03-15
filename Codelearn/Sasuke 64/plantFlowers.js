function plantFlowers(arr,n){
    let count = 0;
    arr.push(0);
    arr.unshift(0);

    for(let i of arr) {
        if(!i) {
            count++;
            if(count === 3) {
                count = 1;
                n--;
            }
        } else {
            count = 0;
        }
    }

    return n <= 0;
}
