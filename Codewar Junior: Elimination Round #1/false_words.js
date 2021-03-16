function falseWords(words){
    let s = "aeoiu";
 
    let count = 0;
    words = words.map(el => el.toLowerCase());
 
    for(let str of words){
        if(!str.match(/[aeoiu]/g)) continue;
        if(str.match(/[aeoiu]{4,}/g)) continue;
 
        str = [...str];
        str = str.slice(-3);
 
        if(str.every(el => !s.includes(el))) continue;
 
        count++;
    }
 
    return count;
}