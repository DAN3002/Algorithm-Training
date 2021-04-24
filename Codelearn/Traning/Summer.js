function summer(n){
    return [...n.toString(2)]
        .filter(el => el == '1')
        .length;
}
