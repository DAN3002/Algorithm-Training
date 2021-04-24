function stringTask2(str){
    const s = 'aoyeui';
    str = [...str.toLowerCase()];
 
    return str.filter(el => !s.includes(el))
            .map(el => '.' + el)
            .join('');
}