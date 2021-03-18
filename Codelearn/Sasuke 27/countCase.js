function countCase(n){
    let map = [];
    for(let i = 1; i <= Math.floor(Math.sqrt(n)); i++) map.push(Math.pow(i,2));
    let f = [];
    for(let i = 0; i <= n; i++) f.push([]);
    f[0] = 1;

    for(let i = 1; i<= n; i++)
    {
        for(let j = 0; j < map.length; j++)
        {
            let el = map[j];
            if(el > i) break;
            else if(el == i){
                f[i].push(i);
            } else {
                let otherMap = f[i - el];
                for(let other of otherMap)
                {
                    if(other < el) f[i].push(el);
                    // if(!other.includes(el))
                    // {
                    //     let c = other.concat([el]);
                    //     if(!f[i].some(el => conpare(el, c))) f[i].push(c);
                    // } 
                }
            }
        }
    }

    return f[n].length;
}

function conpare(a,b)
{
    if(a.length != b.length) return false;
    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);
    return b.every((el,index) => el == a[index]);
}

