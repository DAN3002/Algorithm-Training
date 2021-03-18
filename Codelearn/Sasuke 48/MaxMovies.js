function maxMovies(arr){
    let map = new Map();
    arr = arr.sort((a,b) => a[1] - b[1]);
    let count = 0;
    for(let i = 0 ; i < arr.length; i++)
    {
        let start = arr[i][0], end = arr[i][1];        
        if(checkRoom(map, start, end))
        {
            for(let j = start; j < end; j++) map.set(j, true);
            count++;
        }
    }
    return count;    
}
 
function checkRoom(map, start, end)
{
    for(let j = start;  j < end; j++)
    {
        if(map.get(j)) return false;
    }
    return true;
}