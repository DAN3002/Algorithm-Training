def differentBits(a,b):
    c = bin(a^b)
    d = list(str(c))
    count = 0
    for i in range (len(d)):
        if (d[i] == "1"):
            count += 1
    return count
