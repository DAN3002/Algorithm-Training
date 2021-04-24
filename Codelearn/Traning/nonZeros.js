function nonZeros(v, a){
    let math = v + "+" + a + "==" + (v+a);
    math = math.replace(/0/g, "");
    return eval(math) ? "YES" : "NO";
}