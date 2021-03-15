function jumpingFrog(a){
    const [x1, x2, v1, v2] = a;
    if(x1 == x2) return x1 + "";
    if(v1 == v2 && x1 != x2) return "NO";
    let x = (x2 - x1) / (v1 - v2);
    if(!Number.isInteger(x)) return "NO";
    return (x1 + v1*x) + "";
}