function subtractionTime(a,b){
    if(a === b) return "00:00:00";
    a = strToDate(a);
    b = strToDate(b);

    let between = b > a ? b-a : (24 * 60 * 60) - a + b;

    return dateToStr(between);

}

function dateToStr(date)
{
    let h = Math.floor(date / (60 * 60)) + "";
    date %= 60 * 60;
    let m = Math.floor(date / 60) + "";

    date %= 60;
    date = date + "";
    
    return h.padStart(2, '0') + ":" + m.padStart(2, '0') + ":" + date.padStart(2, '0');
}

function strToDate(str)
{
    let map = [60 * 60, 60, 1];
    str = str.split(":").map(el => parseInt(el));

    let time = 0;
    for(let i = 0; i < 3; i++)
    {
        time += map[i] * str[i]
    }

    return time;
}
