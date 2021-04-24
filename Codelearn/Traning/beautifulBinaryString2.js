function lengthOfBeautifulBinaryString(a){
    return (a.match(/010/g) || []).length;
}
