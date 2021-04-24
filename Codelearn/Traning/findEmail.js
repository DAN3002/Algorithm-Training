function findEmail(s){
    s += " ";
    s = " " + s;
    s = s.match(/ ([a-zA-Z0-9\.]+[a-zA-Z0-9]|[a-zA-Z0-9])\@([a-zA-Z0-9][a-zA-Z0-9-]+|[a-zA-Z0-9])\.([a-zA-Z0-9-]+[a-zA-Z0-9]|[a-zA-Z0-9]) /g);
    return s ? s[0].replace(/ /g, '') : 'Not found!';
}
