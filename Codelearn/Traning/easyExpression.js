function easyExpression(str){
    let nums = str.match(/[+-/*](-\d+|\d+)/g);
    str = str.replace(/[+-/*](-\d+|\d+)/g, "");
    let cal;
    if(str.length == 0)
    {
        cal = parseInt(nums[0]);
        nums.shift();
    } else cal = parseInt(str);
    for(let num of nums)
    {
        let a =  parseInt(num.substring(1));
        switch(num.charAt(0))
        {
            case '+': {
                cal += a;
                break;
            }
            case '-': {
                cal -= a;
                break;
            }
            case '*': {
                cal *= a;
                break;
            }
            case '/': {
                cal = (cal - (cal%a)) / a;
                break;
            }                        
        }        

    }
    return cal;
}

