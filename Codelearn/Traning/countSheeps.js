function countSheeps(time, sh){
    let map = time.split(":").map((el) => parseInt(el));
    map[2] += sh;
    map[1] += Math.floor(map[2] / 60);
    map[2] = map[2] % 60;
    map[0] += Math.floor(map[1] / 60);
    map[1] = map[1] % 60;
    map[0] = map[0] % 24;
 
    map = map.map(el => (el + "").padStart(2,"0"));
 
    return map.join(":");
}
 