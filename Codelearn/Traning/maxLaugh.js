function maxLaugh(s){
    let max = 0;
    let map = s.match(/(ah)+/g) || [];
    map = map.map(el => el.length);
    max = Math.max(max, ...map);
 
    map = s.match(/h(ah)+/g) || [];
    map = map.map(el => el.length);
    max = Math.max(max, ...map);
 
    map = s.match(/(ah)+a/g) || [];
    map = map.map(el => el.length);
    max = Math.max(max, ...map);
 
    map = s.match(/a/g) || [];
    map = map.map(el => el.length);
    max = Math.max(max, ...map);
 
    map = s.match(/h/g) || [];
    map = map.map(el => el.length);
    return Math.max(max, ...map);
}
 