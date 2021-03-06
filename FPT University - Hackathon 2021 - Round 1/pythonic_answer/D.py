import os
import math

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(input):
    ...
    r, g, b = (int(_) / 255 for _ in input().split())
    h, s, v = 0, 0, 0

    cmax = max(r, g, b)
    cmin = min(r, g, b)
    diff = cmax - cmin
    if diff == 0:
        h = 0
    else:
        if cmax == r:
            h = (60 * ((g - b) / diff) + 360) % 360
        if cmax == g:
            h = (60 * ((b - r) / diff) + 120) % 360
        if cmax == b:
            h = (60 * ((r - g) / diff) + 240) % 360
    if cmax == 0:
        s = 0
    else:
        s = (diff / cmax) * 100
    v = cmax * 100
    print(round(h), round(s, 1), round(v, 1))
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