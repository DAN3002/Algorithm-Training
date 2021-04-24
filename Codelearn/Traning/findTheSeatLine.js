function findTheSeatLine(m){
    if(m == 1) return 1;
    let seat = 1;
    while(true)
    {
        if(seat*(seat - 1) / 2 >= m) return seat - 1;
        seat++;
    }
}
