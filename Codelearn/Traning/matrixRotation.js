function matrixRotation(inMatrix,x){
    for(let i = 1; i <= x / 90; i++){
        inMatrix = spin(inMatrix);
    }

    return inMatrix;
}

function spin(matrix){
    const n = matrix.length;
    const m = matrix[0].length;

    let out = [];

    for(let i = m - 1; i >= 0; i--){
        let row = [];
        for(let j = 0; j < n; j++){
            row.push(matrix[j][i]);
        }
        out.push(row);
    }

    return out;
}
