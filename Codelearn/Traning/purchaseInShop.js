let set = new Set();

function purchaseInShop(arr,m){
    arr.sort((a,b) => a-b);
    solve(arr, 0, m, [], 0, false);
    return set.size;    
}

function solve(arr, index ,num, current, sum, add)
{
    if(add && sum == num)
    {
        set.add(current.join("-"));
    }
    if(index < arr.length)
    {
        let newArray = Array.from(current);
        newArray.push(arr[index]);

        solve(arr, index + 1, num, newArray, sum + arr[index], true);
        solve(arr, index + 1, num, current, sum, false);
    }
}
