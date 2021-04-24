function scoreSubmit(m,t,e,r){
    const count = r.filter(([ans, time], index) => time > t || ans !== e[index])
                    .length;
    
    return count > 2 ? 0 : m / ((count * 2) || 1);    
}
