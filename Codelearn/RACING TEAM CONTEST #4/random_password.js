function randomPassword(pass){
    if(pass.length < 8) return false;
 
    let map = new Map();
    pass = pass.toLowerCase();
 
    for(let i = 0; i < pass.length; i++){
        let c = pass[i];
        if(!(/[a-z0-9]/g).test(c)) return false;
 
        if(map.get(c)) return false;
        map.set(c, true);
    }
 
    return true;
}