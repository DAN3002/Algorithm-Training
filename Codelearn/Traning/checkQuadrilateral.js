function checkQuadrilateral(arr){
    return (arr[0] + arr[1] + arr[2] > arr[3])
            && (arr[0] + arr[1] + arr[3] > arr[2])
            && (arr[1] + arr[3] + arr[2] > arr[0])
            && (arr[0] + arr[3] + arr[2] > arr[1])
}
