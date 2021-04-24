function secondBiggest(n, myArray){
    if(n == 2) return myArray[1];
    var biggest = myArray[0];
    var nextbiggest = myArray[0];
    for(var i=0; i < myArray.length; i++){
        if(myArray[i] > biggest){
            nextbiggest = biggest;
            biggest = myArray[i];
        }
        else if(myArray[i]>nextbiggest && myArray[i]!=biggest)
            nextbiggest = myArray[i];
    }
        
    return nextbiggest;
}
 