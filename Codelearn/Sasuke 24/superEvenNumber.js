function superEvenNumber(n){
    if(n == 0) return 0;
    let length = (n + "").length;    
    let count = 0;
    for(let i = 1; i < length; i++)
    {
        count += 4*Math.pow(5,i-1);
    }
    let cal = 0;
    let map = Array.from(n + "")
    for(let i = 0; i < map.length; i++)
    {
        let el = parseInt(map[i]);
        if(el % 2 == 0)
        {
            let index = i == 0 ? get(el) - 1 : get(el);
            index -= 1;
            if(index < 0) index = 0;
            cal += index * Math.pow(5, map.length - i - 1);
        } else {
            let index = i == 0 ? get(el - 1) - 1 : get(el - 1);
            if(index < 0) index = 0;
            cal += index * Math.pow(5, map.length - i - 1);
            break; 
        }        
    }
    if(map.every(el => "02468".includes(el))) cal++;
    return count + cal;
}

function get(n)
{
    if(n == 0) return 0;
    return n/2 + 1;
}

