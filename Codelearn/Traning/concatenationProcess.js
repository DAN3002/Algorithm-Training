function concatenationProcess(initialArray){
    while(initialArray.length != 1)
    {
        let minLeft = findLeftMin(initialArray);        
        let concat = initialArray.splice(minLeft,1)[0];
        let minRight = findRightMin(initialArray);
        concat += initialArray.splice(minRight,1)[0];    
        initialArray.push(concat);
    }
    return initialArray[0];
}

function findLeftMin(initialArray)
{
    let minIndex = 0;
    for(let i = 1; i < initialArray.length; i++)
    {
        if(initialArray[i].length < initialArray[minIndex].length) minIndex = i;
    }
    return minIndex;
}

function findRightMin(initialArray)
{
    let minIndex = initialArray.length - 1;
    for(let i = initialArray.length - 2; i >= 0 ; i--)
    {
        if(initialArray[i].length < initialArray[minIndex].length) minIndex = i;
    }
    return minIndex;
}