function linePoints(points){
    const [p1, p2, p3, p4] = points;
 
    return !isTriangle([p1, p2, p3]) && !isTriangle([p2, p3, p4]);
}
 
function isTriangle(points){
    let x1 = points[0][0];
    let y1 = points[0][1];
 
    let x2 = points[1][0];
    let y2 = points[1][1];
    let x3 = points[2][0];
    let y3 = points[2][1];
 
    let a = x1 * (y2 - y3) +  
        x2 * (y3 - y1) +  
        x3 * (y1 - y2); 
 
    return a != 0;
}