function convertPalindrome(s){
    s = [...s];
    let map = new Map();

    for(let c of s) map.set(c, (map.get(c) || 0) + 1);

    if(!canMake(map)) return -1;

    let mid = getMid(map);
    let count = 0;
    if(mid){
        let minMid = null;
        for(let i = 0; i < s.length; i++){
            if(s[i] == mid){
                let dis = Math.abs(Math.floor(s.length / 2) - i);
                if(minMid == null || minMid.min > dis){
                    minMid = {
                        index: i,
                        dis
                    }
                }
            }
        }

        count += minMid.dis;
        s.splice(minMid.index, 1);
        s.splice(Math.floor(s.length / 2), 0, mid);
    }

    // return Math.min());
    // console.log(s);
    // console.log(s.reverse());
    // console.log(process(s, count), process(s.reverse(), count), count);
    return find(s, count);

}

function getMid(map){
    let out = null;
    map.forEach((value, key) => {
        if(value % 2 != 0){
            out = key;
        }
    });
    return out;
}


function find(s, count) {
    for(let i = 0; i <= Math.floor(s.length / 2); i++){
        let otherIndex = s.length - i - 1;
        if(s[i] != s[otherIndex]){
            let min = null;
            for(let j = i + 1; j < otherIndex; j++){
                if(s[j] == s[i]){
                    let dis = otherIndex - j;
                    if(min == null || min.dis > dis) {
                        min = {
                            dis,
                            index: j
                        }
                    }
                }
            }

            if(!min) continue;

            count += min.dis;
            s.splice(min.index, 1);
            s.splice(otherIndex, 0, s[i]);
        }
    }

    return count;
}

function canMake(map){
    let mid = false;
    let out = true;
    map.forEach((value, key) => {
        if(value % 2 != 0){
            if(mid) out = false;
            mid = true;
        }
    });
    return out;
}


