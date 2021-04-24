function redundancyNumber(n){
	return cal(n) ? n : redundancyNumber(n+1);
}
 
function cal(n) {
    let sum = 1;
    for(let i = 2; i <= Math.sqrt(n); i++ ){ 
        if(n % i == 0) {
            sum += n/i === i ? i : i + n/i;
        }
    }
    return sum > n;
}
