function theAreaOfTetragram(a,b,c,d){
    const p = (a+b+c+d)/2;

    return Number((Math.sqrt((p-a)*(p-b)*(p-c)*(p-d))).toFixed(2));
}
