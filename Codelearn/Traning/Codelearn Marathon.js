function marathonRanking(ranking,scores){
    ranking = [...(new Set(ranking))].sort((a,b) => b-a);
    scores.sort((a,b) => a-b);

    const out = [];
    let i = ranking.length - 1;
    for(let el of scores) {
        while (i !== -1 && ranking[i] <= el) {
            i--;
        }

        out.push(i + 2);
    }

    return out;
}
