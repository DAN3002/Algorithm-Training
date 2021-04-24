function keyboardRow(words){
    return words.filter(word => check(word));
}
 
function check(words)
{
    words = words.toLowerCase();
    let row;
    if("qwertyuiop".includes(words.charAt(0))) row = "qwertyuiop";
    else if("zxcvbnm".includes(words.charAt(0))) row = "zxcvbnm";
    else row = "asdfghjkl";
 
    for(let i = 1; i < words.length; i++)
    {
        if(!row.includes(words.charAt(i))) return false;
    }
    return true;
}
 