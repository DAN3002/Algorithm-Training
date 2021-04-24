def encodeDivision(num, den):
    if(num % den == 0):
        return str(int(num/den)) + ".(0)";
    if (num == 0):  
        return "0"
  
    sign = -1 if (num < 0) ^ (den < 0) else 1
  
    num = abs(num)  
    den = abs(den)  
  
    initial = num // den  
  
    res = ""  
  
    if (sign == -1):  
        res += "-"
  
    res += str(initial)  
  
    if (num % den == 0):  
        return res  
  
    res += "."
  
    rem = num % den  
    mp = {}  
  
    index = 0
    repeating = False
    while (rem > 0 and not repeating) : 
  
        if ( rem in mp):  
  
            index = mp[rem]  
            repeating = True
            break
          
        else: 
            mp[rem] = len(res)  
  
        rem = rem * 10
  
        temp = rem // den  
        res += str(temp ) 
        rem = rem % den  
      
    if (repeating) :  
        res += ")"
        x = res[:index] 
        x += "("
        x += res[index:] 
        res = x 
    else: 
        res += "(0)"
    return res  
