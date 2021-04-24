function isMonotonous(sequence){
    if(sequence.length == 1) return true;
    if(sequence[0] > sequence[1])
    {
        return sequence.every((el,index) => index == 0 || el < sequence[index-1]);
    } else if (sequence[0] < sequence[1])
    {
        return sequence.every((el,index) => index == 0 || el > sequence[index-1]);
    }
    return false;
}
 
 