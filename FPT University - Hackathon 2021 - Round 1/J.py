import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 1

# Solver
def solver(content):
    # n = int(content[0])
    # arr = [int(i) for i in content[1].split(' ')]

    n = int(input())
    arr = [int(i) for i in input().split(' ')]

    out = 0
    for i in arr:
        mol = i % arr[n - 1]
        if mol % 2 == 1:
            out += mol
    
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



