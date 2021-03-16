function calculateMaximumLengthOfLectureHall(l, w){
    if(l == w) return (l/2).toFixed(3);
    return Math.max(w,l)/3 > Math.min(w,l) ? (Math.min(w,l)).toFixed(3) :  Math.max(Math.max(w,l)/3, Math.min(w,l)/2).toFixed(3);
}

