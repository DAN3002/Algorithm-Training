function findTwoInitialNumbers(n, listOfDivisors){
    let max = Math.max(...listOfDivisors);
    if(listOfDivisors.filter(el => el === max).length == 2) return [max, max];
    yMap = listOfDivisors.filter(el => max % el != 0);
    if(yMap.length == 0)
    {
        let min = Math.max(...listOfDivisors.filter((el, index) => listOfDivisors.lastIndexOf(el) != index));
        return [max, min];
    }
    return [max, Math.max(...yMap)];
}
