function checkString(a, b){
    let old = 0;
    for(let i = 0; i < b.length; i++)
    {
        let index = a.indexOf(b.charAt(i), old);
        if(index == -1) return false;
        old = index + 1;
    }
    return true;
}
 