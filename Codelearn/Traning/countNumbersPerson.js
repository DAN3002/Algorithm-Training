function countNumbersPerson(smart, power, exp){
    if(smart < power) {
        exp -= power - smart;
        smart = power;
    }
    let count = 0;
    for(let i = 0; i <= exp; i++)
    {
        if(power + exp - i < smart + i) count++;
    }
    return count;
}
