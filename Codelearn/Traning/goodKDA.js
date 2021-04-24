function goodKDA(kda){
    let count = 0;
    kda = kda
    .map(el => 
    {
        let cut = el.split("-").map(str => parseInt(str));
        if(cut[1] == 0 && cut[2] + cut[0] > 0)
        {
            count++;
            return 0;
        }
        if(cut[1] == 0) return 0;
        return ((cut[0] + cut[2]) / cut[1]).toFixed(6);
    });    
    let mean = kda.reduce((a,b) => Number(a) + Number(b), 0)  / (kda.length - count);

    return count + kda.filter(point => point > mean).length;
}
