function likeButton(a){
    let count = 0;    
    while(a.length != 0)
    {
        let old = a.length;
        let b = a[0];
        a = a.filter(el => el != b);
        if((old - a.length) % 2 != 0) count++;
    }
    return count;
}
 