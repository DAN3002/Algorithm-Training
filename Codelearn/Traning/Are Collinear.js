function collinear(coordinates){
    const [[x1, y1], [x2, y2], [x3, y3]] = coordinates;
    return (y1 - y2) * (x1 - x3) ==  (x1 - x2) * (y1 - y3) 
}
