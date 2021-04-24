function birthdayList(students, m){
    let map = []
    for(let str of students)
    {              
        let month = parseInt(str.substring(str.length - 2, str.length + 1));
        if(month == m)
        {
            let name = str.substring(0,1).toUpperCase() + str.substring(1, str.length - 4).toLowerCase();  
            let day = parseInt(str.substring(str.length - 4, str.length - 2));
            map.push([name, day]);
        }        
    }
    map = map.sort((a,b) => {
        if(a[1] == b[1]) return a[0].localeCompare(b[0]);
        return a[1] - b[1];
    })
    return map.map(el => el[0]);
}
 