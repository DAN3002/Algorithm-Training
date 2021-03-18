function chooseEmployee(skills,salary,requestSkill,k){
    if(k == 0) return 0;
    if(skills.length < k) return -1;

    let map = new Map();
    let arr = [];
    let count = 0;    
    for(let i = 0; i < skills.length; i++)
    {
        let skill = skills[i];
        if(skill == requestSkill)
        {
            k--;
            count += salary[i];
        } else {
            arr.push([skill, salary[i]]);
        }
        if(k == 0) break;
        map.set(skill, (map.get(skill) || 0) + 1);
    }

    if(k == 0) return count;


    arr = arr.sort((a,b) => {
        if(b[0] == a[0]) return a[1] - b[1];
        let cal = map.get(b[0]) - map.get(a[0]);
        return cal == 0 ? a[0].localeCompare(b[0]) : cal;
    });


    for(let i = 0; i < k; i++)
    {
        count += arr[i][1];
    }

    return count;
    
}
