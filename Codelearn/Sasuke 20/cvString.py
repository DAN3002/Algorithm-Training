def convertString(a, b):
    mang = []
    for x in a:
        mang.append(x)
    i = 0
    j = 0
    kt = 0
    while(i < len(mang)):
        if(j == len(b)):
            k = i
            kiemtra = 1
            while(k < len(mang)):
                if('A' <= mang[k] <= 'Z'):
                    kiemtra = 0
                    break
                k = k+1
            if(kiemtra == 1):
                return 'YES'
            else:
                if(kt == 1):
                    return 'NO'
                else:
                    j = 0
        else:
            if( ord('A') <= ord(mang[i]) <= ord('Z')):
                if (mang[i] != b[j]):
                    if(i == 0):
                        return 'NO'