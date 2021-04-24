function oldPlace(s){
    let map = {
        'L': 1, "R": -1, "T": 1, "B": -1
    };
    let sum = 0;
    for(let i = 0; i < s.length; i++)
    {
        sum += map[s.charAt(i)];
    }
    return sum === 0;
}
