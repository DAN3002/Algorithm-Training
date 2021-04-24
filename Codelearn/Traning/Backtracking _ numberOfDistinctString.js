let set = new Set();
function numberOfDistinctString(s,c){
    find(s,c,0, s.length);
    return set.size;
}

function find(s,c,index, oldLength){
    set.add(s);    
    if(index <= oldLength)
    {
        let newStr = s.substring(0, index) + c + s.substring(index, s.length);        
        find(newStr, c , index + 2, oldLength + 1);
        find(s + "", c, index + 1, oldLength);
        
    }
}
