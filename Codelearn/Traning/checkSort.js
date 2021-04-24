function checkSort(a){
    let map = [];
    let current = a[0];
    for(let i = 0; i < a.length; i++)
    {
        if(current != a[i])
        {
            if(map.includes(a[i])) return false;
            map.push(current);
            current = a[i];
        }
    }
    return true;
}
 