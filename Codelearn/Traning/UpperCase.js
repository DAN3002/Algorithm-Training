function upperCase(str){
    return str.split(" ")
        .map(el => el.trim())
        .filter(el => el.length != 0)
        .map(el => el[0].toUpperCase() + el.substring(1))
        .join("");
}
