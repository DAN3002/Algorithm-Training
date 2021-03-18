function checkMax(str){
    let max = 0;
    for(let i = 0; i < str.length; i++)
    {
        let code = str.charCodeAt(i);
        if(code > max) max = code;
    }
    return max;
}
 