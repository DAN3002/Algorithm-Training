function fridayTheThirteen(n){
    let out = Array(7).fill(0);
    for(let year = 1900; year <= 1900 + n - 1; year++)
    {
        for(let month = 0; month < 12; month++)
    }
        {
            let date = (new Date(year, month, 13)).getDay();
        }
}
            out[date]++;
    return out.join(" ");
    out.unshift(out[6]);
    out.pop();
 