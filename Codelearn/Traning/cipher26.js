function cipher26(message){
    let result = '';
    let sub=0,prev=0;
    for(let i=0;i<message.length;i++) {
        var init = message.charCodeAt(i) - 97; 
        sub = init - prev;
 
        if(sub < 0) sub+= 26;
        
        result+= String.fromCharCode(sub+97);
        prev = init;
    }
    return result;
}
 