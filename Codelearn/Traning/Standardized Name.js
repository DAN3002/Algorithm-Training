function standardizedName(name){
    return name.trim()
                .replace(/ +/g, ' ')
                .split(' ')
                .map(el => el[0].toUpperCase() + el.substring(1).toLowerCase())
                .join(' ');
}