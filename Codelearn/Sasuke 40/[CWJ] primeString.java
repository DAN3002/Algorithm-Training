int min = -1;
String a = "qazwsxedcrfvtgbyhnujmikolp";

int primeString(String s) {
    if(s.length() == 1) return 2;
    int[] last = new int[]{1, 3, 7, 9};

    for(int c : last){
        String lastChar = s.charAt(s.length() - 1) + "";

        String str = s.replaceAll(lastChar, c + "");
        solve(str, 0);
    }

    return min;    
}

void solve(String str, int index){
    if(str.charAt(0) == '0') return;
    if(!valid(str)){
        Integer num = Integer.parseInt(str);
        if((min == -1 || num < min) && isPrime(num)){
            min = num;
        }
    } else {
      for(int i = index; i < str.length(); i++){
          String c = str.charAt(i) + "";
          if(a.contains(c)){
              for(int j = 0; j <= 9; j++){
                  if(!str.contains(j + "")){
                    String newStr = str.replaceAll(c, j + "");
                    solve(newStr, i + 1);                      
                  }
              }
              break;
          }
      }
   }
}


boolean valid(String str){
    for(int i = 0; i < str.length(); i++){
        if(a.contains(str.charAt(i) + "")) return true;
    }
    return false;
}

boolean isPrime(int a){
    if(a < 2) return false;
    for(int i = 2; i <= Math.sqrt(a); i++){
        if(a % i == 0) return false;
    }
    return true;
}
