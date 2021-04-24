function mettingRoom(s, e){
    let map = Array(Math.max(...e) + 1).fill(true);    
    let arr = [];
    for(let i = 0; i < s.length; i++)
    {
        arr.push([s[i], e[i]]);
    }
    arr = arr.sort((a,b) => a[1] - b[1]);
    let count = 0;
    for(let i = 0 ; i < arr.length; i++)
    {
        let start = arr[i][0], end = arr[i][1];        
        if(checkRoom(map, start, end))
        {
            for(let j = start; j < end; j++) map[j] = false;
            count++;
        }
    }
    return count;
}


function checkRoom(map, start, end)
{
    for(let j = start;  j < end; j++)
    {
        if(!map[j]) return false;
    }
    return true;
}