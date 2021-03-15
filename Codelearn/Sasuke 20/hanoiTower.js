let map = [0,0,0];
let count = [];
 
function hanoiTower(n, k){
    map[0] = n;
    move(n,0,1,2,k);
    return count[k-1];
}
 
function move(height, srcP, desP, bufferP,k)
{  
    if(height < 1) return;
    move(height - 1, srcP, bufferP, desP,k);
    map[desP]++;
    map[srcP]--;
    count.push(Array.from(map));
    if(count.length === k) return;
    move(height - 1, bufferP, desP, srcP,k);
}
 