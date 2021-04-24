function generateHashtag(str){
    if(str.length == 0) return 'wrong';
    str = str.trim();

    str = str.split(" ")
            .map(el => el.length == 0 ? el : el[0].toUpperCase() + el.substring(1).toLowerCase())
            .join("");
    str = '#' + str;

    return (str.length > 140) ? 'wrong' : str;
}
