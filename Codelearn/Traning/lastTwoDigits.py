def f(s):
    return s if len(s)==2 else '0'+s

def lastTwoDigits(a,b):
    return f(str(pow(a,b,100)))
