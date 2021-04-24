function nameOfYear(n){
    if(n == 1) return 'Tan Dau';
    let map1 = ["Giap","At","Binh","Dinh","Mau","Ky","Canh","Tan","Nham","Quy"];
    let map2 = ["Ti", "Suu", "Dan", "Mao", "Thin", "Ty", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"]
 
    n = (n - 3) % 60;
 
    return map1[n % 10 == 0 ? 9 : n % 10 - 1] + " " + map2[n%12 == 0 ? 11 : n % 12 - 1];
}
 