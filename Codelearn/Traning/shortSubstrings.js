function shortSubstrings(str){
    let cut = str.substring(1, str.length - 1);

    let check = true;
    cut = (cut.match(/.{1,2}/g) || [])
            .map(el => {
                if(el[0] != el[1]) check = false;
                return el[0];
            })
            .join("");
    return !check ? "-1" : str[0] + cut + str[str.length - 1];
}
