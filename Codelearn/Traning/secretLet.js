function secret(arr){
    return arr.map(code => {
        let newCode = code % 2 == 0 ? code/2 : (code - 1)/2;
        let c = String.fromCharCode(newCode);
        if((/[a-zA-Z]/g).test(c)) return c;
        return String.fromCharCode(code);
    })
    .join("");
}
