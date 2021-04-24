function contest(a,k){
    return a.filter(el => el >= a[k-1] && el > 0).length;
}