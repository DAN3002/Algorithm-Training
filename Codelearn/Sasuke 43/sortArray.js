function sortArray(a,k){
    let boy = a.filter(el => el % k == 0);
    let girl = a.filter(el => el % k != 0);
 
    boy.sort((a,b) => b-a);
    girl.sort((a,b) => a-b);
 
    let out = [];
 
    for(let i = 0; i < a.length; i++){
        if(a[i] % k == 0){
            out.push(boy.shift());
        } else out.push(girl.shift());
    }
 
    return out;
}