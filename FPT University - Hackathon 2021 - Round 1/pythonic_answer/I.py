import os
import math


TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 1


# Solver
def solver(input):
    ...
    N = 8
    C = '*'

    out = [[' '] * N for _ in range(N)]
    for i in range(N):
        for j, cell_content in enumerate(input()):
            if cell_content == C:
                out[j][N - i - 1] = '*'

    for row in out:
        print(''.join(row))
    ...


def solveByPath(path):
    with open(path) as f: content = f.readlines()
    holder = (x[:-1] for x in content)
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
