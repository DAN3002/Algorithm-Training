function clockHandAngle(string){
    let cut = string.split(":").map(el => parseInt(el));
    let h = cut[0];
    let m = cut[1];
    m += cut[2]/60;
 
    if (h == 12) 
        h = 0; 
    if (m == 60)  
        m = 0; 
    let hour_angle = (0.5 * (h*60 + m)); 
    let minute_angle = (6*m); 
    let angle = Math.abs(hour_angle - minute_angle); 
 
    angle = Math.min(360-angle, angle); 
 
    return angle.toFixed(5); 
}
 