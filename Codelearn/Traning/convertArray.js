function convertArray(a){
    if(a.every(el => el == 0)) return false;
    a = a.map(el => Math.abs(el));

    let check = null;
    let swap = true;
    
    for(let i = 1; i < a.length; i++)
    {
        if(a[i] == a[i-1])
        {
            if(!swap) return false;
            check = check == null ? null : !check;
        } else if(a[i] > a[i-1])
        {
            // up
            if(check == false) return false;
            check = true;
        } else
        {
            // down
            if(check == true) return false;
            check = false;
        }
    }

    return true;
}
