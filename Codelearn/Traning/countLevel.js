function countLevel(a){
    let count = 1;
    if((a[0] >= a[1]) && (a[2] >= a[3]))
        return -1;
    while(a[0] >= a[1]) {
        a[0] *= a[2];
        a[1] *= a[3];
        count++;
    }

    return count;
}

