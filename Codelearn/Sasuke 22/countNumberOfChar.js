function countNumberOfChar(str){
    return [...str].filter(el => "qwertyuiopasdfghjklzxcvbnm".includes(el) || "QWERTYUIOPASDFGHJKLZXCVBNM".includes(el)).length;
}

