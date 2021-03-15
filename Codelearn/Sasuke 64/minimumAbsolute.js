function minimumAbsolute(arr){
    arr.sort((a,b) => a-b);
 
    let out = [];
    let min = null;
 
    for(let i = 0; i < arr.length - 1; i++) {
        const a = arr[i], b = arr[i+1];
 
        if(!min || b-a < min) {
            min = b-a;
            out = [[a,b]];
        } else if (min === b-a) {
            out.push([a,b]);
        }
    }
 
    return out;
}