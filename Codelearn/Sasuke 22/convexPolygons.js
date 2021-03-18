function convexPolygons(a){
    // if(a.length < 4) return true;
    // a = a.sort((p1, p2) => Math.abs(p1[0] - p1[1]) - Math.abs(p2[0] - p2[1]));
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
    // let p1 = a[0];
    // let p2 = a.slice(-1)[0];
    // a.pop();
    // a.shift();
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
    // if(arr.some(el => el == 0)) return false;
    // console.log(arr);
    if(arr[0] > 0)
    {
        return arr.every(el => el > 0);
    } else return arr.every(el => el < 0);

}

