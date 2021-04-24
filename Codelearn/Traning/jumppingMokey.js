function jumppingMokey(a){
    if(a[0] == 1) return -1;

    let size = a.length;

    let f = Array(size).fill(-1);

    f[0] = 0;
    f[2] = a[2] == 0 ? 1 : -1;
    f[3] = a[3] == 0 ? 1 : -1;

    for(let i = 4; i < size; i++){
        if(a[i] == 0) {
            let a2 = f[i - 2];
            let a3 = f[i - 3];

            if(a2 == -1 && a3 == -1) f[i] = -1;
            else if(a2 == -1 && a3 != -1) f[i] = a3 + 1;
            else if(a3 == -1 && a2 != -1) f[i] = a2 + 1;
            else f[i] = Math.min(a2, a3) + 1;
        }
    }

    return f[size-1];
}
