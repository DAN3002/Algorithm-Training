function strongPass(password){
    const regexs = [
        /[a-z]/g,
        /[A-Z]/g,
        /[0-9]/g,
        /[!@#$%^&*()-+]/g,
    ];
 
    let count = 0;
    for(let regex of regexs)
    {
        count += password.match(regex) ? 0 : 1;
    }
 
    return Math.max(6 - password.length, count) || -1;
}