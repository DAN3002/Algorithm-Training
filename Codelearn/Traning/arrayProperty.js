function arrayProperty(a){
    if(a.every(el => el == a[0])) return "Undetermined";
    if(a.length <= 2 ) return "Undetermined";

    let exponential = checkExponential(a);
    if(exponential != undefined) {
        let first = a[0];
        let second = a[1];
        if(first < 0) {
            first = -first;
            second = -second;
        }
        
        if(Number.isInteger(exponential)) return `Exponential - Geometric Difference = ${exponential}`; 
        let gcd = GCD(Math.abs(first), Math.abs(second));

        return `Exponential - Geometric Difference = ${second / gcd}/${first / gcd}`;
    }

    let linear = checkLinear(a);

    if(linear != undefined) return `Linear - Arithmetic Difference = ${linear}`;



    return "Undetermined";
}

function GCD(a,b){
    return b == 0 ? a : GCD(b, a%b);
}

function checkLinear(a){
    let diff = a[1] - a[0];

    if(a.every((el,index) => index == 0 || a[index - 1] + diff == el)) return diff;
    return undefined;
}

function checkExponential(a){
    let diff = a[1] / a[0];

    if(a.every((el,index) => index == 0 || a[index - 1] * diff == el)) return diff;
    return undefined;
}
