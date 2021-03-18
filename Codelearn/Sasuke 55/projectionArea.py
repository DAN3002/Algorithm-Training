def projectionArea(arr):
    row1 = [0]*len(arr)
    row2 = [0]*len(arr[0])
    top = 0
    for i in range(0,len(arr)):
        for j in range(len(arr[0])):
            if(arr[i][j]>0): top+=1
            row1[i] = max(row1[i], arr[i][j])
            row2[j] = max(row2[j], arr[i][j])
    return top + sum(row1) + sum(row2)