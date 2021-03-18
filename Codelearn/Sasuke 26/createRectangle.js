function createRectangle(points) {
   for(let i = 0; i < 3; i++)
   {
      let point = points[i];
      let other = points.filter((el,index) => index != i);
      if(checkPoint(point, other[0], other[1]))
      {
         let center = getCenter(other[0], other[1]);
         return [center[0]*2 - point[0], center[1]*2 - point[1]];
      }
   }
}
 
function checkPoint(p1, p2, p3) {
   return (p2[0] - p1[0])*(p2[1] - p1[1]) + (p3[0] - p1[0])*(p3[1] - p1[1]) == 0;
}
 
function getCenter(p1, p2) {
   return [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2];
}