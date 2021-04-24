function middleOfTheContest(s1, s2){
    s1 = s1.split(":");
    s2 = s2.split(":");
    let total = (parseInt(s1[0]) + parseInt(s2[0]))*60 + parseInt(s1[1]) + parseInt(s2[1]);
    total /= 2;
    return (Math.floor(total/60) + "").padStart(2,"0") + ":" + (total%60 + "").padStart(2,"0");
}
