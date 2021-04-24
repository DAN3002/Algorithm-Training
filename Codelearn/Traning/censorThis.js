function censorThis(text, forbiddenWords){
    return text.split(" ")
            .map(el => {
                let str = el.toLowerCase();
                if(forbiddenWords.includes(str)) return "*".repeat(str.length);
                return el;
            })
            .join(" ");
}

