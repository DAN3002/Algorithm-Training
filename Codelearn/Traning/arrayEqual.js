function arrayEqual(a){
    let min = a.reduce((a,b) => a+b, 0) / a.length;
    return Math.min(count(a, Math.floor(min)), count(a, Math.ceil(min)));
 
}
 
function count(a, b)
{
    let count = 0;
    a.map(el => {
        count += Math.abs(b - el);
    });
    return count;
}