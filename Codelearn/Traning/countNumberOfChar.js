function countNumberOfChar(str){
    return (str.match(/[a-z]|[A-Z]/g) || []).length;
}
 