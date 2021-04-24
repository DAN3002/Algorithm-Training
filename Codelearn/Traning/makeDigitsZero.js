function makeDigitsZero(n){
    let f = Array(n + 1).fill(-1);

    f[n] = 0;

    for(let i = n; i >= 1; i--){
        if(f[i] == -1) continue;

        const digits = Array.from(new Set([...i.toString()]))
                    .map(el => parseInt(el));
        
        
        for(let digit of digits){
            if(i - digit >= 0){
                const current = f[i - digit];

                if(current == -1) f[i-digit] = f[i] + 1;
                else f[i-digit] = Math.min(f[i] + 1, current);
            }
        }
        // print(f, i);
    }

    // console.log(f);
    return f[0];


}

// function print(arr, i){
//     console.log('----');
//     arr.map((el, index) => 
//     {
//         if(el != -1 && index <= i) console.log(index + " -- " + el);
//     });
// }
