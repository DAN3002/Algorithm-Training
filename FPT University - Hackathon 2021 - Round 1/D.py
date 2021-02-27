import sys
import math

# Config 
TEST_MODE = False
NUM_OF_TEST = 3

# Solver
def solver(content):
    # r, g, b = [int(i) for i in content[0].split(' ')]
    r, g, b = [int(i) for i in input().split(' ')]

    r, g, b = r/255.0, g/255.0, b/255.0
    cmax = max(r, g, b)
    cmin= min(r, g, b)
    diff = cmax-cmin
    if cmax == cmin:
        h = 0
    elif cmax == r:
        h = (60 * ((g-b)/diff) + 360) % 360
    elif cmax == g:
        h = (60 * ((b-r)/diff) + 120) % 360
    elif cmax == b:
        h = (60 * ((r-g)/diff) + 240) % 360
    if cmax == 0:
        s = 0
    else:
        s = (diff/cmax)*100
    v = cmax*100
    print(int(h), round(float(s),1), round(v,1))


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



