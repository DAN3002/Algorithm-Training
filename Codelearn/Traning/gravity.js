function gravity(space){
    let count = 0;
    for(let i = 0; i < space[0].length; i++)
    {
        let fill = 0;
        for(let j = space.length - 1; j >= 0; j--)
        {
            if(space[j][i] == 1)
            {
                fill++;
                count += (space.length  - j) - fill;
            }
        }
    }
    return count;
}
