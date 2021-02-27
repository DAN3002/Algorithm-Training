import sys
import math 

# Config 
TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(content):
    n = int(input())
    arr = []
    for i in range(1, n + 1):
        arr.append(int(input()))

    out = 0
    for i, el in enumerate(arr):
        if i != 0 and el > arr[i-1]:
            out += arr[i] - arr[i-1]
            arr[i] = arr[i-1]
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
