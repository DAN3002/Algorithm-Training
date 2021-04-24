function caesarBoxCipherEncoding(inputString){
    let res = 0;
    let len = inputString.length;
    let sqrt_len = Math.floor(Math.sqrt(len));
    for (let n = 2; n <= sqrt_len; n++) {
    if (len % n == 0) {
        if (encode(encode(inputString, n), n) == inputString) {
            if (n * n == len) res += 1;
            else res += 2;
        }
    }
    }
 
    return res;
}
 
function encode(str,n)
{
    let res = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(str.length / n); j++) {
            res += str.charAt(j * n + i);
        }
    }
    return res;
}