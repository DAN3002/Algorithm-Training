function playList(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        let map = new Map();
        let count = 0;
        for(let j = i; j < arr.length; j++){
            const el = arr[j];
            if(!map.get(el)){
                count++;
                map.set(el, true);
            } else break;
        }
        max = Math.max(max, count);
    }
 
    return max;
}