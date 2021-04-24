function countTriangles(xpoints, ypoints){
    let arr = [];
    for(let i = 0; i < xpoints.length; i++) arr.push([xpoints[i], ypoints[i]]);
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++)
    {
        let p = arr[i];
        for(let j = i + 1; j < arr.length; j++)
        {
            let p2 = arr[j];
            let a = p[1] - p2[1], b = p2[0] - p[0];
            let c = -a*p2[0] - b*p2[1];
            let points = arr.filter(p3 => p3[0]*a + p3[1]*b + c != 0).length;
            count +=  points;
        }
    }
    return count/3;
 
}
 