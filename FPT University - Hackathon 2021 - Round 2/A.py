import os
import math
from itertools import chain

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def convolution(image, filt, stride=(1, 1), padding=(0, 0), bias=0):
    f_x, f_y = len(filt), len(filt[0])

    if padding == 'same' or padding == 'SAME':
        p_x = int((f_x - 1) / 2)
        p_y = int((f_y - 1) / 2)
    else:
        p_x, p_y = padding


    s_x, s_y = stride

    image_x = len(image)
    image_y = len(image[0])

    padded_len_x = image_x + 2 * p_x
    padded_len_y = image_y + 2 * p_y

    out_x = math.floor((padded_len_x - f_x) / s_x + 1)
    out_y = math.floor((padded_len_y - f_y) / s_y + 1)
    out = [[0] * out_y for _ in range(out_x)]

    image_padded = [[0] * padded_len_y for _ in range(padded_len_x)]

    for i in range(image_x):
        image_padded[i + p_x][p_y:p_y + image_y] = image[i]

    for i in range(out_x):
        x = i * s_x
        for j in range(out_y):
            y = j * s_y
            # sub_M = M[i:i+p, j:j+q] -- 2D slicing in native python list
            sub_M = [image_padded[_][y:y + f_y] for _ in range(x, x + f_x)]
            out[i][j] = sum(sub_M[_i][_j] * filt[_i][_j] for _i in range(f_x) for _j in range(f_y)) + bias

    return out

def solver(input):
    filter = [
        [-1/9, -1/9, -1/9],
        [-1/9, 8/9, -1/9],
        [-1/9, -1/9, -1/9]
    ]

    m, n = map(int , input().split())
    mat = []
    for i in range(m):
        mat.append(list(map(int , input().split())))
    # print(mat)
    conv = convolution(mat, filter, padding="same")

    for row in conv:
        print(' '.join(map(str, map(int, row))))
    # print(conv)


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('./testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
