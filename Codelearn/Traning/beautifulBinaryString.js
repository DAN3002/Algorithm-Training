function beautifulBinaryString(binaryString){
    let arr = [];
    arr.push(binaryString[0]);
    for(let i = 1; i< binaryString.length; i++)
    {
        if(arr[arr.length - 1] == binaryString[i])
        {
            arr.pop();
        } else arr.push(binaryString[i]);
    }
    return arr.length == 0;
}
 