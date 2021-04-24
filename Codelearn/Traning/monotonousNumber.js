function monotonousNumber(num){
    num = Array.from(num).map(el => parseInt(el));
 
    if(num.length == 1) return true;
    if(num[0] == num[1]) return false;
 
    let check = parseInt(num[1]) < parseInt(num[2]);
 
    for(let i = 2; i < num.length; i++)
    {
        if(check && num[i-1] >= num[i]) return false;
        else if(!check && num[i-1] <= num[i]) return false;
        check = check ? false : true;
    }
 
    return true;
}
 