def jugWater(x,y,z):
    return z==0 or (z<=x+y and z%math.gcd(x,y)==0)