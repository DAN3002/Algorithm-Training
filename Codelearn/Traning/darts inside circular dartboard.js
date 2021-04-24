function dartsInsideCircularDartboard(points,r){
    return points.filter(el => cal(el) <= r).length;
}

function cal([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
