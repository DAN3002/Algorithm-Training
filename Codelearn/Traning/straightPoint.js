function straightPoint(a){
    if(a.length == 1) return 1;
    let max = 0;
    for(let i = 0; i < a.length - 1 - max; i++)
    {
        let p = a[i];
        let other = a.slice(i + 1);
        while(other.length != 0)
        {
            let p2 = other[0];            
            let a = p[1] - p2[1], b = p2[0] - p[0];
            let c = -a*p2[0] - b*p2[1];
            let count = 2;
            for(let j = 1; j < other.length; j++)
            {
                let p3 = other[j];
                if(p3[0]*a + p3[1]*b + c == 0)
                {
                    count++;
                    other.splice(j,1);                    
                    j--;
                }
            }
            if(count > max) max = count;
            other.shift();
        }
    }
    return max;
}