function isValidPassword(pass){
    if(pass.length < 6 || pass.length > 12) return false;
    const UPPER = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lower = "qwertyuiopasdfghjklzxcvbnm";
    const num = "0123456789";
    const special = "!@#$%^&*()";
    if(!countDigig("[" + lower + "]", pass, 1,4)) return false;
    if(!countDigig("[" + UPPER + "]", pass, 1,4)) return false;
    if(!countDigig("[" + num + "]", pass, 1,4)) return false;
    if(!countDigig("[" + special + "]", pass, 1,1)) return false;
    if(!countNextDigig(lower, pass)) return false;
    if(!countNextDigig(UPPER, pass)) return false;
    if(!countNextDigig(num, pass)) return false;    
    return ![...pass].some(el => !UPPER.includes(el) && !lower.includes(el) && !num.includes(el) && !special.includes(el));
}

function countDigig(regex, pass, min, max)
{
    let count = pass.match(new RegExp(regex, "g"));
    return (count != null && count.length >= min && count.length <= max);
}

function countNextDigig(regex, pass)
{
    let count = pass.match(new RegExp("[" + regex + "]{3,}", "g"));
    return count == null;
}
