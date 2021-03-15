function sunlight(buildings){
    let out = [1];
    for(let i = 1; i < buildings.length; i++)
    {
        let hourse = buildings[i];
        let check = true;
        for(let j = 0; j < i; j++)
        {
            if(buildings[j] >= hourse)
            {
                check = false;
                break;
            }
        }
        if(check) out.push(i+1);
    }
    return out;
 
}
 