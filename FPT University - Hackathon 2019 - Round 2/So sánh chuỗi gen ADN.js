function compareADNGenomes(strFirstGen, strSecondGen){
    if(strFirstGen.length != strSecondGen.length) return 'NO';
    if(strFirstGen === strSecondGen) return 'NO';
    let lastIndex = -1;
    let check = false;
    for(let i = 0; i < strFirstGen.length; i++)
    {
        if(strFirstGen.charAt(i) != strSecondGen.charAt(i))
        {
            if(check) return 'NO';
            if(lastIndex === -1)
            {
                lastIndex = i;
            } else {
                if(strFirstGen.charAt(lastIndex) === strSecondGen.charAt(i) && strFirstGen.charAt(i) === strSecondGen.charAt(lastIndex))
                {
                    check = true;
                } else return 'NO';
            }
        }
    }
    return check ? 'YES' : 'NO';
}

