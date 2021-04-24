    n1 = list(map(int, n1))
    n2 = list(map(int, n2))
    x1 = n1[1] * math.log(n1[0])
    x2 = n2[1] * math.log(n2[0])
    if x1 < x2:
        return 1
    elif x1 > x2:
        return -1
    return 0
