function minMax(n){
     n = [...n.toString()].sort((a,b) => b-a);
     return Number(n.join("")) - Number(n.reverse().join(""));
}