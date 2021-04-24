function minimumChocolateMoves(arr){
    let even = 0, odd = 0, countOne = 0;

    for(let i = 0; i < arr.length; i++){
        const el = arr[i];
        if(i % 2 == 0 && el % 2 == 1){
            even++;
            if(el == 1) countOne++;
        } 
        else if(i % 2 == 1 && el % 2 == 0) odd++;
    }


    let count = 0;
    let min = Math.min(even, odd);
    

    even -= min; odd -= min; countOne -= min;
    count += min;

    console.log(count, even, odd, countOne);
    if(odd != 0) {
        if(odd % 2 != 0) return -1;
        return count + odd/2;
    } else {
        if(countOne != 0){
            if(countOne == even){
                if(countOne % 2 != 0) return -1;
                return count + countOne;
            } else {
                let other = even - countOne;

                if(other >= countOne){
                    if(even % 2 != 0) return -1;
                    return count + even/2;       
                } else {
                    count += other;
                    countOne -= other;

                    if(countOne % 2 != 0) return -1;
                    return count + countOne;                

                }
            }
        } else {
            if(even % 2 != 0) return -1;
            return count + even/2;            
        }
    }

    return count;
}
