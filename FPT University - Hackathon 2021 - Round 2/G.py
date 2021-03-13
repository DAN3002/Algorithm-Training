import os
import math

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def slicing_2d(matrix, x, y):
    x_step = 1 if len(x) == 2 else x[2]
    y_step = 1 if len(y) == 2 else y[2]
    x_begin, x_end = x[0], x[1]
    y_begin, y_end = y[0], y[1]
    return [matrix[_x][y_begin: y_end: y_step] for _x in range(x_begin, x_end, x_step)]

def solver(input):
    ...
    M, N = map(int , input().split())
    A = [list(map(int, input().split())) for i in range(M)]

    out = []
    for i in range(M - N + 1):
        for j in range(M - N + 1):
            subM = slicing_2d(A, (i, i + N), (j, j+N))
            a = sum(map(sum, subM))
            # print(a)
            out.append(a)
    # print(out)
    b = max(out)
    print(b)
    # print('done')


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
