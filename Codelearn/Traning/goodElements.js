function goodElements(a){
    let set = new Set();
    for(let i = 0; i < a.length; i++)
    {
        for(let j = i + 1; j < a.length; j++)
        {
            set.add(a[i] + a[j]);
        }
    }
    set = Array.from(set);
    let count = 0;
    for(let i of a)
    {
        if(set.includes(i)) count++;
    }
    return count;
}
 