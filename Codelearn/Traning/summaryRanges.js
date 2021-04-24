function summaryRanges(a){
    if(a.length == 0) return [];
    a.sort((a,b) => a-b);

    let start = a[0];
    let end = a[0] + 1;

    let out = [];

    for(let i = 1; i < a.length; i++){
        let el = a[i];
        if(el == end){
            end++;
        } else {
            if(end == start + 1){
                out.push(start + "");
            } else out.push(start + "->" + (end-1));
            start = el;
            end = el + 1;
        }
    }

    if(end == start + 1){
        out.push(start + "");
    } else out.push(start + "->" + (end-1));    

    return out;
    
}
