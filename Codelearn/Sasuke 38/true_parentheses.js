function trueParentheses(str){
    if(str.length == 0) return false;
    let open = 0;
    let close = 0;
    for(let i = 0; i < str.length; i++){
        let c = str[i];
        if(c == '(') open++;
        else {
            if(open <= close) return false;
            close++;
        }
    }
    return open == close && open % 2 == 0;
}