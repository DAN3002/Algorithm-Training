function equalKey(cal){
    for(let i = 1; i < cal.length; i++){
        try{
            if(eval(add(cal, i))) return true;
        } catch {

        }
    }

    return false;
}

function add(cal, index){
    return cal.substring(0, index) + "==" + cal.substring(index, cal.length);
}
