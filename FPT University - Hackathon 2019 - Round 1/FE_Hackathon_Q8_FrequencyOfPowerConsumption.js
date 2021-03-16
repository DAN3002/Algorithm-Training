function frequencyOfPowerConsumption(n, m, matrixPower){
    let maxArr = getMax(matrixPower);
    let max = maxArr % 50 != 0 ? ((Math.floor(maxArr/50))*50 + 50) : maxArr;
    let pivot = max / 10;
    let head = [];
    let count = [];
    count.length = 10;
    for(let i = 1; i <= 10; i++)
    {
        head.push(pivot * i);
    }
    count = count.fill(0);

    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < m; j++)
        {
            let element = matrixPower[i][j];
            for(let index = 0; index <= 9; index++)
            {
                if(index*pivot <= element && (index+1)*pivot > element)
                {
                    // if(index == 10)
                    // {
                    //     if(count.length == 10) count.push(0);
                    // }
                    count[index]++;
                    break;
                }
            } 
        }
    }   

    return [head, count];
}

function getMax(a){
  return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
}


