function isSquare(x, y){
    let d2 = distSq(0, 1,x,y);
    let d3 = distSq(0, 2,x,y);
    let d4 = distSq(0, 3,x,y);
  
  
    if (d2 == d3 && 2 * d2 == d4 
        && 2 * distSq(1, 3,x,y) == distSq(1, 2,x,y)) 
    { 
        return true; 
    } 
  
    if (d3 == d4 && 2 * d3 == d2 
        && 2 * distSq(2, 1,x,y) == distSq(2, 3,x,y))  
    { 
        return true; 
    } 
    if (d2 == d4 && 2 * d2 == d3 
        && 2 * distSq(1, 2,x,y) == distSq(1, 3,x,y)) 
    { 
        return true; 
    } 
  
    return false; 
} 

function distSq(p,q,x,y) 
{ 
    return (x[p] - x[q]) * (x[p] - x[q]) + (y[p] - y[q]) * (y[p] - y[q]); 
} 
  
