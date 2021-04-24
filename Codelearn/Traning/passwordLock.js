function passwordLock(a, b){
    let sum = 0;
    for(let i = 0; i < b.length; i++)
    {
        let now = parseInt(a.charAt(i));
        let pass = parseInt(b.charAt(i));
        sum += Math.min(Math.min((10-pass) + now, (10-now) + pass), Math.max(now,pass) - Math.min(pass, now));
    }
    return sum;
}

