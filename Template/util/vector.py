import math
import operator


def dot(vector1, vector2):
    return sum(map(operator.mul, vector1, vector2))


def outer_product(vector1, vector2):
    vector1 = [[_] for _ in vector1]  # transpose
    vector2 = [vector2]
    return [[sum(m * n for m, n in zip(i, j)) for j in zip(*vector2)] for i in vector1]


# def flatten(vector):
#     # roll 2d to 1d
#     return [_ for __ in vector for _ in __]


def vector_projection_to_vector(u, v):
    # project u to v
    _ = dot(u, v) / dot(v, v)
    return [e * _ for e in v]


def vector_projection_plane(u, n):
    # project u to plane P has vector phap tuyen n
    _ = dot(u, n) / dot(n, n)
    return [u[i] - n[i] * _ for i in range(len(u))]


def linspace(start, stop, n):
    if n == 1:
        yield stop
        return
    h = (stop - start) / (n - 1)
    for i in range(n):
        yield start + h * i


# ---
def left_rotate_n_time(arr, d, n):
    l = len(arr)
    out = [0 for _ in range(l)]

    for i, el in enumerate(arr):
        out[(d * n + i) % l] = el
    return out


def get_all_contiguous_sub_arrays(arr, size=-1):
    length = len(arr)
    if size == -1:
        # all size
        return [arr[i:i + j] for i in range(0, length) for j in range(1, length - i + 1)]
    else:
        return [arr[i: i + size] for i in range(0, length - size + 1)]

# import itertools.combinations, itertools.permutations -> all subsequences
