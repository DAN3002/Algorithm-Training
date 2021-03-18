function deleteWords(str1,str2){
    const maxLength = Math.max(str1.length, str2.length);
    const minLength = Math.min(str1.length, str2.length);    
 
    const n1 = str1.length; n2 = str2.length;
    for(let i = 0; i < minLength; i++) {
        if(str1[n1 - i - 1] != str2[n2 - i - 1]) {
            return (n1 - i) + (n2 - i);
        }
    }
 
    return Math.abs(n1 - n2);
}