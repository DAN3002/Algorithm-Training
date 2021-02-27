import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(content):
    n, m = list(map(int, input().split()))
    A = []
    for i in range(n):
        A.append(list(map(int, input().split())))

    out = [0] * 256
    for row in A:
        for value in row:
            out[value] += 1
    out = list(map(str, out))

    print(' '.join(out))

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
