let map = [];
function maxNumber(a,b){
    a = [...a.toString()].map(el => parseInt(el));
    b = [...b.toString()].map(el => parseInt(el));
 
    find(a,b,"");
    return Math.max(...map);
}
 
function find(a,b, out)
{
    while(a.length != 0 || b.length != 0)
    {
        let fa = a[0] || -1;
        let fb = b[0] || -1;
        if(fa > fb)
        {
            out += fa;
            a.shift();
        }else if(fb > fa) {
            out += fb;
            b.shift();
        } else {
            out += fb;
            find(a.slice(1), Array.from(b), out);
            find(Array.from(a), b.slice(1), out);
            break;
        }