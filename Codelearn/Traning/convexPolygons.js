function convexPolygons(a){
    for(let i = 0; i < a.length; i++)
    {
        let count = 0;
        let point1 = a[i];
        let temp = Array.from(a);
        temp.splice(i,1);
        for(let j = 0; j < temp.length; j++)
        {
            let point2 = temp[j];
            let temp2 = Array.from(temp);
            temp2.splice(j,1);
            if(check(point1, point2, temp2)) count++;
        }
        if(count < 2) return false;
    }
    return true;
}

function check(point1, point2, map)
{
    let arr = [];
    for(let point of map)
    {
        let sign = (point2[0] - point1[0]) * (point[1] - point1[1]) - (point2[1] - point1[1]) * (point[0] - point1[0]);
        arr.push(sign);
    }
    if(arr[0] > 0)
    {
        return arr.every(el => el > 0);
    } else return arr.every(el => el < 0);

}
