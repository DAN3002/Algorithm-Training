function perfectTriplePrime(k){
    const MAX = 4868977;
    let map = Array(MAX + 1).fill(true);
 
    let prime = [];
 
    for(let i = 2; i <= MAX; i++){
        if(map[i]){            
            let add = [-1, 1];
            if(i <= 10000) prime.push(i);
            
            for(let num of add){
                let x3 = 2*i + num;
                if(!prime.some(el => x3 % el == 0)){
                    // console.log(i, x3);
                    if(k == 1) return [i, i, x3];
                    k--;
                }                
            }
            for(let j = i*i; j <= MAX; j += i) {
                map[j] = false;
            } 
        }
    }
}