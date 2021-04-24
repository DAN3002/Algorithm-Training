function isPossibleTransformation(s, t){
    let consonants = "ueoai";
    if(s.length != t.length) return false;
    for(let i = 0; i < s.length; i++)
    {
        if(consonants.includes(s.charAt(i)) && !consonants.includes(t.charAt(i))) return false;
        if(!consonants.includes(s.charAt(i)) && consonants.includes(t.charAt(i))) return false;
    }
    return true;
}
