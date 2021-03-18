function stringIsNumber(str){
    if(str[0] == '0') return false;
    return Number.isInteger(Number(str));
}