function rectangular(s1, s2, s3){
    let h = Math.sqrt(s1*s2/s3);
    return (h + s1/h + s2/h)*4;
}
