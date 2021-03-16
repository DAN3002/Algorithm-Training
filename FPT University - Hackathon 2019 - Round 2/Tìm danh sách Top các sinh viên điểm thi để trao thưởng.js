function collectTopRewardableStudents(n, arrRollnos, arrGrades){
    let max = Math.max(...arrGrades);
    let out = [];
    for(let i = 0; i < n; i++)
    {
        if(arrGrades[i] == max)
        {
            out.push(arrRollnos[i]);
        }
    }
    return out;
}
 