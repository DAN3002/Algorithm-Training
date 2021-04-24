function isMAC48Address(inputString){
    let reg = /[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}-[0-9A-F]{2}$/;             
    return reg.test(inputString);
}
 