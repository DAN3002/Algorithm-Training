let out = false;
let map = new Map();

function unlockTheCode(start,target,n,arr){
    // if(start == "XXXOXXOOXX" && target == "OOOOOOOO") return false;
    out = false;
    solve(target, start, n, arr);
    return out;
}

function solve(current, target, n, arr){
    let key = current + "-" + n;
    if(map.get(key)){
        return;
    }
    map.set(key, true);
    if(n == 0) {
        if(current == target) out = true;
        return;
    }
    const old = current + "";
    for(let change of arr){
        if(out) break;
        const [b, a] = change;
        let index = current.indexOf(a);
        while(index != -1){
            if(out) break;

            let newStr = swapStr(current, b, a, index);
            solve(newStr, target, n - 1, arr);

            index = current.indexOf(a, index + 1);
        }
    }
}

function swapStr(str, b, a , index){
    return str.substring(0, index) + b + str.substring(index + a.length, str.length);
}
