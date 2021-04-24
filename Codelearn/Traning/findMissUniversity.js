function findMissUniversity(numberOfJudges,selectedContestants = []){
    let listScore = [];
    let max = 0;
    selectedContestants.forEach(list => {
        list.forEach((id, rank) => {
            if (!listScore[id]) {
                listScore[id] = {
                    id: id,
                    0: 0,
                    1: 0,
                    2: 0,
                    total: 0
                };
            }
            listScore[id][rank]++;
            listScore[id].total += (3 - rank);
            if (listScore[id].total > max) max = listScore[id].total;
        });
    });
    listScore = listScore.filter(miss => (miss && miss.total === max));
    if (listScore.length === 1) {
        return [listScore[0].id]
    }
    let top1 = 0;
    let top2 = 0;
    listScore.forEach(miss => {
        if (miss[0] > top1) top1 = miss[0];
    });
    listScore = listScore.filter(miss => miss[0] === top1);
    listScore.forEach(miss => {
        if (miss[1] > top2) top2 = miss[1];
    });
    listScore = listScore.filter(miss => miss[1] === top2);
    return listScore.map(miss => miss.id)
}
