const f = [];
 
function sequenceNumber(l,r){
    r = Math.min(r, 123456789);
 
    for(let i = (l+'').length; i <= (r+'').length; i++)
    {
        add(i);
    }
 
    return f.filter(el => el >= l && el <= r);
}
 
function add(l) {
    const str = '123456789';
    for(let i = 0; i <= 9 - l; i++) {
        f.push(parseInt(str.substring(i, i + l)));
    }
}