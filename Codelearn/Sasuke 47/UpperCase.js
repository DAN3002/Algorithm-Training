function upperCase(s){
    return s.split(" ")
            .map(el => el.length == 0 ? '' : el[0].toUpperCase() + el.substring(1).toLowerCase())
            .join("");
}