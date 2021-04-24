function highScoringWord(x){
    x = x.split(" ")
        .map((el, index) => {
            let count = 0;
            for(let i = 0; i < el.length; i++) count += el.charCodeAt(i) - 96;
            return {
                word: el,
                count, index
            };
        });
 
    x.sort((a,b) => b.count - a.count == 0 ? a.index - b.index : b.count - a.count);
    return x[0].word;
}
