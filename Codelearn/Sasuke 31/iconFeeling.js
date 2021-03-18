function iconFeeling(a){
    let map = new Map();
    for(let i of a) map.set(i, (map.get(i) || 0) + 1);
    let arr = [];
    map.forEach((el, key) => {
        arr.push([key, el]);
    });
    
    arr.sort((arr1,arr2) => {
        if(arr1[0] != arr2[0]) return arr2[1] - arr1[1];
        return a.indexOf(arr1[1]) - a.indexOf(arr2[1]);
    });
 
    return arr.slice(0,3).map(el => el[0]);
}