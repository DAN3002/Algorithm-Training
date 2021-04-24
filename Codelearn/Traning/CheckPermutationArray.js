function checkPermutationArray(a,b){
    if(a.length != b.length) return false;

    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);

    return a.every((el,index) => el == b[index]);
}
