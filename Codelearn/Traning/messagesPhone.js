function messagesPhone(a, k){
    do {
        let index = a.findIndex((el, index) => {
            for(let i = index - 1; i >= index - k && i >= 0; i--)        
            {
                if(a[i] == el) return true;
            }
            return false;
        });
        if(index == -1) break;        
        else {
            a.splice(index, 1);
        }
    } while(true)
 
    return a.splice(-k);
}
 