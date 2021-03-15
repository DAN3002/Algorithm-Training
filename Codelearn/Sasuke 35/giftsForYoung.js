function giftsForYoung(name,money,say){
    let price = 0;
    for(let i = 0; i < name.length; i++)
    {
        if(name[i] != ',')
        {
            price += name.charCodeAt(i);
        }
    }
    console.log(price);
    if(price > money)
    {
        return say == 'lie' ? 'Police' : "Can not buy";
    } else if(price < money){
        if(say == "trust") return (money % price == 0) ? "Free" : "Pay";
        else return "Free";
    } else {
        return say == "trust" ? "Free" : "Can not buy";
    }
}