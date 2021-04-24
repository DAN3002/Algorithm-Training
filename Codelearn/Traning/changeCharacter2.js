function changeCharacter2(s){
    return Math.min((s.match(/[a-z]+/g) || []).length, (s.match(/[A-Z]+/g) || []).length);
}
 