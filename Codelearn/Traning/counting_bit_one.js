function countingBitOne(num){
    let out = [];

    for(let i = 0; i <= num; i++){
        out.push(i.toString(2).replace(/0/g, "").length);
    }
    
    return out;
}
