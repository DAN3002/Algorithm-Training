function roboPosition(run){
    run = run.split(",").map(el => el.trim());
    let x = 0, y = 0;
    let vecX = 0, vecY = 1;

    for(let el of run){
        if(el == 'TB'){
            vecX = -vecX;
            vecY = -vecY
        } else if(el =='TL'){
            let temp = -vecY;
            vecY = vecX;
            vecX = temp;
        } else if(el =='TR'){
            let temp = -vecX;
            vecX = vecY;
            vecY = temp;
        } else {
            el = el.replace("Go ", "");
            let time = parseInt(el);
            x += time * vecX;
            y += time * vecY;
        }
    }

    return [x,y];
}
