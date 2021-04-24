function coolString(inputString){
    const upper = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const lower = 'qwertyuiopasdfghjklzxcvbnm';
        
    if (/[^a-zA-Z]/.test(inputString)) return false;    
    let check = upper.includes(inputString.charAt(0));
    let chars = Array.from(inputString);
    return chars.every((char, index) => {
        if(index == 0) return true;
        let contain = upper.includes(char) ? lower : upper;
        return contain.includes(chars[index - 1]);
    });
}
 