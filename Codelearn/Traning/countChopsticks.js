function countChopsticks(a,k){
    return (a.filter(el => el >= k).length >> 1);
}