int prettyArray(int[] arr) {
    int count = 0;
    for(int i : arr){
        if(i % 2 == 0) count++;
    }
    return Math.min(count, arr.length - count);
}