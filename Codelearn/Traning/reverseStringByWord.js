function reverseStringByWord(s){
    return s.replace(/ +/g, ' ')
        .split(" ")
        .reverse()
        .join(" ")
        .trim();
}
