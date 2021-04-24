function ropes(a, k){
    a.sort(function(a, b){return b - a});
    var tempc = 0;var out = 0;
    for(var i = a[0];i>0;i--){
       for(var o = 0;o < a.length;o++){
           tempc += Math.floor(a[o] / i);
       }
       if(tempc >= k){
           return i;
       }else{
           tempc = 0;
       }
   }
   return -1;
}