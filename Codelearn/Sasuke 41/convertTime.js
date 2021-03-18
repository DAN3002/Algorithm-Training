function convertTime(s){
    if(s.length != 10) return 'false';
    let t = 0;

    let mod = s.substring(s.length - 2);
    let time = s.substring(0, s.length - 2).split(":").map(el => parseInt(el));
    console.log(s.length);

    if(time[0] > 12) return 'false';

    if(time[0] == 12 && mod == 'PM') time[0] = 0;
    time[0] += mod == "PM" ? 12 : 0;
    if(time[0] == 12 && mod == 'AM') time[0] = 0;


    time[2] += t;
    time[1] += Math.floor(time[2] / 60);
    time[2] %= 60;


    time[0] += Math.floor(time[1] / 60);
    time[1] %= 60;
    
    time[0] %= 24;

    time = time.map(el => (el + "").padStart(2, "0"));

    return time.join(":");    
}
