function nextDay(s){    
    let cut =  s.split("/");
    let date = new Date(parseInt(cut[2]), parseInt(cut[1]) - 1, parseInt(cut[0]));
    date.setDate(date.getDate()+1);
    let year = date.getFullYear();
    let month = (1 + date.getMonth());
    let day = date.getDate().toString();
  
    return day + "/" + month + "/" + year;
}
 
 