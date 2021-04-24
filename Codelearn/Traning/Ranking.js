function amaranthus(n,lst) {
    const arr = [...new Set(lst)]
                    .sort((a,b) => b-a)
                    .slice(0, 3)
                    .map(score => lst.filter(el => el === score).length);

    const [a = 0, b = 0, c = 0] = arr;
    return `1st : ${a}; 2nd : ${b}; 3rd : ${c}`;
}
