import sys
import math

# Config 
TEST_MODE = True
NUM_OF_TEST = 1

def dot(x, y):
    size = len(x)
    sum = 0
    for i in range(size):
        for j in range(size):
            sum += x[i][j] * y[i][j]

    return sum

def get_sub(maxtrix, x, y, n, m):
    return [maxtrix[i][y:y+m] for i in range(x, x + n)]

# Solver
def solver(content):
    # n1, m1, n2, m2 = [int(i) for i in content[0].split(' ')]

    # data = []
    # for i in range(1, n1 + 1):
    #     data.append([int(i) for i in content[i].split(' ')])
    
    # filter = []
    # for i in range(1, n2 + 1):
    #     filter.append([int(i) for i in content[n1 + i].split(' ')])

    n1, m1, n2, m2 = [int(i) for i in input().split(' ')]

    data = []
    for i in range(1, n1 + 1):
        data.append([int(i) for i in input().split(' ')])
    
    filter = []
    for i in range(1, n2 + 1):
        filter.append([int(i) for i in input().split(' ')])

    sizeX = n1 - n2 + 1
    sizeY = m1 - m2 + 1
    out = [[0] * sizeX for i in range(sizeY)]

    for i in range(sizeY):
        for j in range(sizeX):
            sub = get_sub(data, i, j, n2, m2)

            out[i][j] = str(dot(sub, filter))

    for arr in out:
        print(' '.join(arr))

def solveByPath(path):
    with open(path) as f:
        content = f.readlines()
    content = [x.strip() for x in content]
    solver(content)

if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            problem = sys.argv[0].replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)

    else:
        solver(None)



