import os
import math

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 4


# Solver
def solver(input):
    ...
    m, n = map(int, input().split())
    last = max(m, n)
    begin = min(m, n)
    if begin & 1: begin += 1
    if last & 1: last -= 1

    # O(1)
    print(round(
        (begin + last) / 2
        * ((last - begin) / 2 + 1)
    ))
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
