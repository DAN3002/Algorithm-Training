function lineUp(s, t){
    for(let i = 0; i < t; i++)
    {
        s = s.replace(/BG/g, "GB");
    }
    return s;
}
 