function countChangeNumbers(n, k){
    let out = [n];
    for(let i = 1; i <= k; i++)
    {
        let add = [];
        for(let j = 0; j < out.length; j++)
        {
            let el = out[j];
            let c1 = el * 2;
            let c2 = (el-1)/3;
            if(c1 %2 == 0) add.push(c1);
            if(Number.isInteger(c2) && c2 % 2 != 0) add.push(c2);
        }
        out = add;
    }
    return out.sort((a,b) => a-b);
}
 