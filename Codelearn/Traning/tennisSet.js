function tennisSet(score1, score2){
    if(score1 > 7 || score2 > 7) return false;
    if(score1 <= 5 && score2 <= 5) return false;
 
    if(score1 == 7) return score2 == 6 || score2 == 5;
    if(score2 == 7) return score1 == 6 || score1 == 5;
 
    if(score2 == 6) return score1 < 5;
    if(score1 == 6) return score2 < 5;
 
    return true; 
}
 
 
 