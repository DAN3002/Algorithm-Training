def findNumberSpiral(x,y):
    M = max(x,y)
    return(x-y)*(-1)**M+M*M-M+1