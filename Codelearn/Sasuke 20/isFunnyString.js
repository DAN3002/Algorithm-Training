function funnyString(str){
    let map = [];
    for(let i = 0; i < str.length - 1; i++)
    {
        map.push(Math.abs(str.charCodeAt(i) - str.charCodeAt(i+1)));
    }
 
    str = Array.from(str).reverse().join("");
    let map2 = [];
    for(let i = 0; i < str.length - 1; i++)
    {
        map2.push(Math.abs(str.charCodeAt(i) - str.charCodeAt(i+1)));
    }
    return map.every((el, index) => el === map2[index]) ? "Funny" : "Not Funny";
}
 