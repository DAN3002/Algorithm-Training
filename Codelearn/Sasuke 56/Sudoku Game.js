let out = undefined;

function solverSudoku(maxtrix){
    maxtrix = maxtrix.map(el => [...el].map(num => parseInt(num)));
    let mapRow = createMapRow(maxtrix);
    let mapCol = createMapCol(maxtrix);
    let mapSquare = createMapSquare(maxtrix);

    solve(maxtrix, mapRow, mapCol, mapSquare, 0, 0);
    return out || maxtrix;

}

function solve(maxtrix, mapRow, mapCol, mapSquare, x,y){
    // console.log("----");
    
    // console.log(maxtrix);
    // console.log(mapRow);
    // console.log(mapCol);
    if(out) return ;

    if(x == 9){
        out = maxtrix;
        return;
    }

    let newY = y + 1;
    let newX = x;

    if(newY >= 9){
        newY = 0; 
        newX++;
    }    

    if(maxtrix[x][y] != 0){
        solve(maxtrix, mapRow, mapCol, mapSquare, newX, newY);
        return ;
    }

    let index = getIndex(x,y);
    for(let i = 1; i <= 9; i++){
        if(out) break;

        if(!mapRow[x].includes(i) && !mapCol[y].includes(i) && !mapSquare[index].includes(i)){
            let newMaxtrix = copy(maxtrix);
            newMaxtrix[x][y] = i;

            let newMapRow = createMapRow(newMaxtrix);
            let newMapCol = createMapCol(newMaxtrix);
            let newMapSquare = createMapSquare(newMaxtrix);

            solve(newMaxtrix, newMapRow, newMapCol, newMapSquare, newX, newY);
        }
    }
}

function createMapRow(maxtrix){
    return maxtrix.map(el => el.filter(num => num != 0));
}

function createMapCol(maxtrix){
    let mapCol = [];
    for(let i = 0; i < 9; i++){
        mapCol.push([]);
        for(let j = 0; j < 9; j++){
            if(maxtrix[j][i] != 0) mapCol[i].push(maxtrix[j][i]);
        }
    }

    return mapCol;
}

function copy(maxtrix){
    let out = [];
    for(let i = 0; i < 9; i++){
        out.push(Array.from(maxtrix[i]));
    }

    return out;
}

function createMapSquare(maxtrix){
    let out = [];
    for(let i = 0; i < 9; i++) out.push([]);
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            out[getIndex(i, j)].push(maxtrix[i][j]);
        }
    }
    return out;
}

function getIndex(x,y){
    return Math.floor(x/3)*3 + Math.floor(y/3);
}
