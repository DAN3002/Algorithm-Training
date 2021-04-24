let set = new Set();

function sumSubsets(arr, num){
    let b = [1, 2, 2, 3, 4, 5];

    arr.sort((a,b) => a-b);
    solve(arr, 0, num, [], 0, false);
    return Array.from(set)
            .map(el => el.split("-").map(num => parseInt(num)));
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
