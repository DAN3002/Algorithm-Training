let min = 0;
let arr, money;

function pantsChoose(cost,m){
    cost.sort((a,b) => b-a);

    arr = cost;
    money = m;
    min = 0;

    solve(0, 0, 0, 0);

    return min;
}

function solve(index, sum, minNotUse, count) {
    if(sum > money) return ;
    if(index == arr.length){
        if(count != 0 && minNotUse != 0 && sum + minNotUse > money){
            min = min == 0 ? count : Math.min(min, count);
        } 
    } else {
        let notUse = minNotUse == 0 ? arr[index] : Math.min(arr[index], minNotUse);
        solve(index + 1, sum + arr[index], minNotUse, count + 1);
        solve(index + 1, sum, notUse, count);
    }
}
