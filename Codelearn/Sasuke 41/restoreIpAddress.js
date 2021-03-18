let map = [];

function restoreIpAddress(s){
    solve(s, 0,"", []);

    map.sort();

    return map;
}

function solve(s, index, current, out){
    if(out.length > 4) return ;
    // console.log(index, current, out);
    if(index == s.length) {
        if(out.length != 4) return ;

        // if(out.some(el => el <= 0 || el > 255)) return;

        map.push(out.join("."));
        return ;
    }


    for(let i = index; i < s.length; i++){
        let cal = current + s[i];
        // console.log(cal);
        if(cal.length != 1 && cal[0] == '0') break;
        if(parseInt(cal) > 255) break;

        let newOut = Array.from(out);
        newOut.push(cal);

        solve(s, i + 1, "", newOut); 
        current = cal;
    }
}
