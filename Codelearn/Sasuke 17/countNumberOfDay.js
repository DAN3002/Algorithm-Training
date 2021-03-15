function countNumberOfDay(year, date){
    let str = date + "/" + year;
    let date2 = new Date(str);
    let first = new Date("1/1/" + year);
    let time = date2.getTime() - first.getTime();
    return time / (1000 * 3600 * 24);
}
 