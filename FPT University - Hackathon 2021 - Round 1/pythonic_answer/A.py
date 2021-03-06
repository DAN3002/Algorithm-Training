import sys
import os
import math

# Config
TEST_MODE = True
NUM_OF_TEST = 3


# Solver
def solver(input):
    ...
    n1, m1, n2, m2 = map(int, input().split())
    if n1 != n2 or m1 != m2:
        return print('different')
    A = [list(map(int, input().split())) for _ in range(n1)]
    B = [list(map(int, input().split())) for _ in range(n2)]
    out = sum(map(sum, A)) == sum(map(sum, B))
    print('identical' if out else 'different')
    ...


def solveByPath(path):
    with open(path) as f: content = f.readlines()
    holder = (x.strip() for x in content)
    solver(lambda: next(holder))


if __name__ == '__main__':
    if TEST_MODE:
        IS_LINUX = False
        for i in range(1, NUM_OF_TEST + 1):
            problem = os.path.basename(__file__).replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)
    else:
        solver(input)
