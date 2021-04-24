function countNumber(arr,n){
    return (new Set(arr.filter((el) => el % n == 0))).size;
}
