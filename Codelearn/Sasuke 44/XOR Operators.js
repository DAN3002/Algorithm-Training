function xorOperator(message,key){
    key = key.repeat(Math.ceil(message.length / key.length));
 
    key = [...key]; message = [...message];
 
    return message.map((el, index) => el == key[index] ? "0" : "1").join("");
}