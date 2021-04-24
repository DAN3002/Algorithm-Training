function textToBinary(text){
    return [...text]
            .map(el => el.charCodeAt(0).toString(2).padStart(8, '0'))
            .join(' ');
}
