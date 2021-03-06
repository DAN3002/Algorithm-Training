import os
import math

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 1


# Solver
def hadamard_product_then_sum(sub_M, F):
    h = len(F)
    w = len(F[0])
    sum = 0
    for i in range(h):
        for j in range(w):
            sum += sub_M[i][j] * F[i][j]
    return sum


def solver(input):
    ...
    m, n, p, q = map(int, input().split())
    M = [list(map(int, input().split())) for _ in range(m)]
    F = [list(map(int, input().split())) for _ in range(p)]

    out_h = m - p + 1
    out_w = n - q + 1
    out = [[0] * out_w for _ in range(out_h)]

    for i in range(out_h):
        for j in range(out_w):
            # sub_M = M[i:i+p, j:j+q] -- 2D slicing in native python list
            sub_M = [M[_][j:j+q] for _ in range(i, i+p)]
            out[i][j] = hadamard_product_then_sum(sub_M, F)

    for row in out:
        print(' '.join(map(str, row)))
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
