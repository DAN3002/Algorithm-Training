function prefixOfWord(s,p){
    return s.split(' ')
            .findIndex(el => el.indexOf(p) === 0) + 1 || -1;
}
