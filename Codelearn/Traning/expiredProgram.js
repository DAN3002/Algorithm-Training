function expiredProgram(time1,time2){
    const getArrTime = (time) =>{
        const arrTime =[];
        const list = time.split("-");
        arrTime.push(list[0],...list[1].split("/"));

        return arrTime
    }
    var listTime1=getArrTime(time1);
    var listTime2=getArrTime(time2);
    var cost = [50,1000,10000,100000];
    var result = 0;


    for(let i=3;i>=0;i--){
        if(listTime1[i]!= listTime2[i]){
            result = (+listTime2[i]-+listTime1[i]) * cost[i];
            break
        }
    }

    return result > 0 ? result : 0
}
