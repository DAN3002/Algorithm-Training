function powerOfFive(num){
    if(num == 0) return false;
    return Math.pow(5, Math.floor(Math.log(num) / Math.log(5))) == num;
}