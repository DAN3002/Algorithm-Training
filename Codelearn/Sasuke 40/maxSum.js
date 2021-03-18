let max = 0;
let dp = new Map();

function maxSum(arr){
    max = 0;
    let map = [];

    for(let i = 0; i <= 9; i++){
        map.push([]);
    }   
    // console.log(map);
    for(let i of arr){
        let a = [...i.toString()];
        for(let c of a) map[Number(c)].push(i);
    }
    let check = Array(10).fill(true);
    // console.log(map);
    // console.log(check);
    solve(map, check, 0);
    
    return max;
}

function solve(map, check, current){
    // console.log(check);
    // console.log(current);
    let key = check.join("-") + "," + current;
    if(dp.get(key)) return;

    dp.set(key, true);

    if(current > max) max = current;
    for(let i = 0; i <= 9; i++) {
        if(map[i] && check[i]){
            // console.log(map[i]);
            let arr = map[i];
            for(let num of arr){      
                let newCheck = Array.from(check);         
                // console.log(newCheck);                 
                let a = Array.from(new Set([...num.toString()])).map(el => parseInt(el));
                // console.log(a);
                let d = true;
                for(let c of a) {
                    if(!newCheck[c]) {
                        d = false;
                        break;
                    }
                    else newCheck[c] = false;
                }        
                if(!d) continue;     
                solve(map, newCheck, current + num);
            }
        }
    }
}
