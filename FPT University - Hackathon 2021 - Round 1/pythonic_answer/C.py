import os
import math

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(input):
    ...
    n, m = map(int, input().split())
    out = [0] * 256
    for _ in range(n):
        for num in map(int, input().split()):
            out[num] += 1
    print(' '.join(map(str, out)))
    ...

def solveByPath(path):
    with open(path) as f: content = f.readlines()
    holder = (x.strip() for x in content)
    solver(lambda: next(holder))

if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            problem = os.path.basename(__file__).replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)
    else:
        solver(input)