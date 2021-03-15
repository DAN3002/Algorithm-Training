function isValidGuestPassword(password){
    for(let i = 0; i < password.length; i++)
    {
        let pass = Array.from(new Set(Array.from(password[i])));
        if(pass.length < 8) return false;
        for(let j = i + 1; j < password.length; j++)
        {
            let map = Array.from(password[j]);
            if(!map.some(el => !pass.includes(el))) return false;
        }
    }
    return true;
}
 