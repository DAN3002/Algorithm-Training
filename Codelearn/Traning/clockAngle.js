function clockAngle(h,m){
    if (h == 12) 
        h = 0; 
    if (m == 60)  
        m = 0; 
    let hour_angle = (0.5 * (h*60 + m)); 
    let minute_angle = (6*m); 
    let angle = Math.abs(hour_angle - minute_angle); 
 
    angle = Math.min(360-angle, angle); 
 
    return Math.abs(angle);     
}