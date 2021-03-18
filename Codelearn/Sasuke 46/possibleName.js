function possibleName(name,typed){
    typed = Array.from(new Set([...typed])).join("");
    name = Array.from(new Set([...name])).join("");
    
    return name == typed;
}