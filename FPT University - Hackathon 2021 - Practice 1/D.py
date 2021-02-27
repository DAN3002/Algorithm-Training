import sys
import math 

# Config 
TEST_MODE = False
NUM_OF_TEST = 1

#Global
MOVES = [
    (0, 1), (0, -1), (-1, 0), (1, 0)
]
out = -1
map = []
index = []
virusIndex = []
distances = []
n = 0
m = 0

# Solver
def calDistance(p1, p2):
    return max(abs(p1[0] - p2[0]), abs(p1[1] - p2[1])) 

# x = row, y = column
def findWay(x, y, minDistance, map):
    global out
    global index

    if x < 0 or x >= n or y < 0 or y >= m:
        return
    
    if distances[x][y] == -1:
        return

    if distances[x][y] == -2:
        out = max(out, minDistance)

        for i in range(n):
            for j in range(m):
                if map[i][j]:
                    index[i][j] = out
        return

    if map[x][y]:
        return

    if minDistance <= index[x][y]:
        return

    map[x][y] = True
    minDistance = min(minDistance, distances[x][y])

    if minDistance <= out:
        return

    for move in MOVES:
        findWay(x + move[0], y + move[1], minDistance, [a.copy() for a in map])

def solver(content):
    global n
    global m
    global out
    global virusIndex
    global index
    global distances

    out = -1
    arr = []
    virusIndex = []

    startX = 0
    startY = 0

    n, m = [int(i) for i in content[0].split(' ')]
    
    for i in range(1, n + 1):
        row = list(content[i])
        # row = list(input())
        for j in range(m):
            if row[j] == '*':
                virusIndex.append((i-1, j))
            elif row[j] == 'S':
                startX = i - 1
                startY = j

        arr.append(row)
    
    map = [([False] * m) for i in range(n)]
    index = [([0] * m) for i in range(n)]
    distances = [([-1] * m) for i in range(n)]

    for i in range(n):
        for j in range(m):
            if not arr[i][j] in ['*', '#', 'E']:
                distances[i][j] = min([calDistance((i,j), virus) for virus in virusIndex])
            elif arr[i][j] == 'E':
                distances[i][j] = -2

    for r in distances:
        print(r)

    findWay(startX, startY, max(m + 1, n + 1), map)

    if not out == -1 and len(virusIndex) == 0:
        print('safe')
    else:
        print(out)

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
