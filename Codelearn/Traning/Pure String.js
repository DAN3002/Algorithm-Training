function explosion(s){
    s = [...s]
            .filter(el => /[A-Z]/g.test(el))
            .join('');
    return s.length ? s : "Failed";
