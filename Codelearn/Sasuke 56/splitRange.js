function splitRange(arr){
    const out = [];
 
    let start = arr[0];
    let end = arr[0];
 
    arr.shift();
 
    for(const el of arr) {
        if(el == end + 1) {
            end = el
        } else {
            if(start === end) out.push(start + "");
            else out.push(start + '->' + end);            
            start = el;
            end = el;
        }
    }
 
    if(start === end) out.push(start + "");
    else out.push(start + '->' + end);   
 
    return out;
}