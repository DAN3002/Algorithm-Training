function nextIP(ip){    
    ip.sort((a,b) => a-b);
    for(let i = 1; i <= ip.length; i++)
    {
        if(i != ip[i-1]) return i;
    }
    return ip.length + 1;
}
 