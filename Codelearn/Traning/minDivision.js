function minDivision(a){
    let set = new Set(a);
    for(let i of a)
    {
        while(i % 2 == 0)
        {
            i /= 2;
        }
    }
            set.add(i);
    return Array.from(set).filter(el => el % 2  == 0).length;
}