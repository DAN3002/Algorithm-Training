function standardPassword(s){
    return (s.match(/[0-9]+|[a-z]+/g) || []).every(el => el == s);
}
