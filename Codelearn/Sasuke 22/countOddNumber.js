function countOddNumber(str){
    return [...str].filter(el => "13579".includes(el)).length;
}
 