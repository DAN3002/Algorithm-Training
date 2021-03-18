function boxChat(s, a){
    s = s.split(" ");
    for(let i = 0; i < s.length; i++)
    {
        if(a.includes(s[i]))
        {
            s[i] = "*".repeat(s[i].length);
        }
    }
    return s.join(" ");
}
 