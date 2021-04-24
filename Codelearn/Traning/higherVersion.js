function higherVersion(a, b){
    if (a === b) {
       return false;
    }
 
    var a_components = a.split(".");
    var b_components = b.split(".");
 
    var len = Math.min(a_components.length, b_components.length);
 
    for (var i = 0; i < len; i++) {
        if (parseInt(a_components[i]) > parseInt(b_components[i])) {
            return true;
        }
        if (parseInt(a_components[i]) < parseInt(b_components[i])) {
            return false;
        }
    }
    if (a_components.length > b_components.length) {
        return true;
    }
    return false;
}
 