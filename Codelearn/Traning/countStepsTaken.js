function countStepsTaken(a){
    if(a.length == 0) return 0;
    return (new Set(a.map(el => (el[1] - el[0])))).size;
}