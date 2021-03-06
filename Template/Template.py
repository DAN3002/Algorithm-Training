import sys
import os
import math

# Config
TEST_MODE = True
NUM_OF_TEST = 3


# Solver
def solver(get_line):
    input = get_line  # <-- change TEST_MODE to TRUE and comment out this line

    ...
    print(input())
    ...


def solveByPath(path):
    with open(path) as f: content = f.readlines()
    holder = (x.strip() for x in content)
    solver(lambda: next(holder))


if __name__ == '__main__':
    if TEST_MODE:
        IS_LINUX = True
        for i in range(1, NUM_OF_TEST + 1):
            if IS_LINUX:
                problem = sys.argv[0].replace('.py', '')
            else:
                problem = os.path.basename(__file__).replace('.py', '')
            path = f'testcase/samples-{problem}/{i}.in'
            print('----------')
            print('TestCase ' + str(i))
            solveByPath(path)
    else:
        solver(None)
