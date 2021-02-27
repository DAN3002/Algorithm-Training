import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(content):
    n, m, t = list(map(int, input().split()))
    array = []
    for _ in range(n):
        array.append(list(map(int, input().split())))

    # out = []
    for i in range(n):
        for j in range(m):
            if array[i][j] > t:
                array[i][j] = 1
            else:
                array[i][j] = 0

    for i in range(n):
        print(' '.join(map(str, array[i])))


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

