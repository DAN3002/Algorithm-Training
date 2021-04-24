let set = new Set();
function combinationSum(arr,k){
    arr.sort((a,b) => a-b);
    find(arr, 0, 0, k, []);
    return set.size;
}

function find(arr,index,current, k, map)
{
    if(current == k) 
    {
        set.add(map.join("-"));        
    }
    if(index < arr.length) 
    {        
        find(arr, index + 1, current, k, Array.from(map));
        map.push(arr[index]);
        find(arr, index + 1, current + arr[index], k,  Array.from(map));
    }
}
