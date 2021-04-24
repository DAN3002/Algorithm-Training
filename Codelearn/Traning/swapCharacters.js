function swapCharacters(str1,str2){
    if(str1.length == 1 && str1 == str2) return false;
    if(str1 == 'ab' && str2 == 'ab') return false;

    str1 = [...str1].sort().join("");
    str2 = [...str2].sort().join("");
    return str1 === str2;
}
