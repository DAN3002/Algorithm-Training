function quizSolve(arr,x){
    let index = arr.findIndex((el,index) => x + index < el);
    return index == -1 ? arr.length : index;
}