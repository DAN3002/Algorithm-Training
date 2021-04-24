def pixel(matrix,i,j):
    total = 0
    for x in range(i-1,i+2):
        for y in range(j-1,j+2):
            total += matrix[x][y]
    return total//9
 
def boxBlur(image):
    sol = []
    row = len(image)
    col = len(image[0])
    for i in range(1,row-1):
        temp = []
        for j in range(1,col-1):
            temp.append(pixel(image,i,j))
        sol.append(temp)
    
    return sol