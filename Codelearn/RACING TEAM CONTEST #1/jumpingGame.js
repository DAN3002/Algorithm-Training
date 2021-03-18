function jumpingGame(arr,h,t){
    return arr.every((el,index) => el <= h + index*t );
}