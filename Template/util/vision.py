import math
from statistics import mean


def convolution(image, filt, stride=(1, 1), padding=(0, 0), bias=0):
    """
    2d image 1 channel
    """
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


def max_pooling(image, filt_size=(3, 3), stride=None, padding=(0, 0)):
    """
    2d image 1 channel
    """
    if stride is None: stride = filt_size
    f_x, f_y = filt_size
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
            out[i][j] = max(map(max, sub_M))

    return out


def avg_pooling(image, filt_size=(3, 3), stride=None, padding=(0, 0)):
    """
    2d image 1 channel
    """
    if stride is None: stride = filt_size
    f_x, f_y = filt_size
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
            out[i][j] = mean(map(mean, sub_M))

    return out


# from colorsys import rgb_to_hsv
def rgb_to_hsv(r: int, g: int, b: int):
    r, g, b = r/255, g/255, b/255
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

    return h, s, v


# from colorsys import hsv_to_rgb
"""
h: 0 -> 360
saturation: 0 -> 1
value: 0 -> 1
"""
def hsv_to_rgb(h, s, v):
    if s == 0.0: return (v, v, v)
    i = int(h*6.)
    f = (h*6.)-i; p,q,t = v*(1.-s), v*(1.-s*f), v*(1.-s*(1.-f)); i%=6
    if i == 0: return (v, t, p)
    if i == 1: return (q, v, p)
    if i == 2: return (p, v, t)
    if i == 3: return (p, q, v)
    if i == 4: return (t, p, v)
    if i == 5: return (v, p, q)


def gaussian_blur(image, size, sigma):
    def linspace(start, stop, n):
        if n == 1:
            yield stop
            return
        h = (stop - start) / (n - 1)
        for i in range(n):
            yield start + h * i

    def matmul(matrix_a, matrix_b):
        return [
            [sum(m * n for m, n in zip(i, j)) for j in zip(*matrix_b)] for i in matrix_a
        ]

    def transpose(matrix, return_map: bool = True):
        if return_map:
            return map(list, zip(*matrix))
        else:
            return list(map(list, zip(*matrix)))

    def dnorm(x, mu, sd):
        return 1 / (math.sqrt(2 * math.pi) * sd) * math.e ** (-(((x - mu) / sd) ** 2) / 2)

    def gaussian_kernel(size, sigma=1):
        kernel_1D = linspace(-(size // 2), size // 2, size)
        for i in range(size):
            kernel_1D[i] = dnorm(kernel_1D[i], 0, sigma)
        kernel_2D = matmul(transpose(kernel_1D, False), kernel_1D)
        _max = max(map(max, kernel_2D))
        for i in range(size):
            for j in range(size):
                kernel_2D[i][j] *= 1.0 / _max
        return kernel_2D

    return convolution(image, gaussian_kernel(size, sigma), padding='same')
