import math
import operator


def matmul(matrix_a, matrix_b):
    # doesn't check cols[0] != rows[1], so will not throw Exception when error
    # -> use with caution!!!
    return [[sum(m * n for m, n in zip(i, j)) for j in zip(*matrix_b)] for i in matrix_a]


def rotate_matrix(M, degree: int):  # 2d array, also allow string
    h = len(M)
    w = len(M[0])
    if degree == 90:
        return [[M[y][-x] for y in range(h)] for x in range(1, w + 1)]
    elif degree == -90 or degree == 270:
        return [[M[-y][x] for y in range(1, h + 1)] for x in range(w)]
    elif degree == 180 or degree == -180:
        return [[M[-x][-y] for y in range(1, h + 1)] for x in range(1, w + 1)]
    else:
        raise ValueError(degree)


def slicing_2d(matrix, x, y):
    """
    M[0:3, 1:4] == slicing_2d(M, (0, 3), (1, 4))
    M[0:3:2, 1:4:2] == slicing_2d(M, (0, 3, 2), (1, 4, 2))
    """
    x_step = 1 if len(x) == 2 else x[2]
    y_step = 1 if len(y) == 2 else y[2]
    x_begin, x_end = x[0], x[1]
    y_begin, y_end = y[0], y[1]
    return [matrix[_x][y_begin: y_end: y_step] for _x in range(x_begin, x_end, x_step)]


def slicing_2d_with_assignment(A, B, slice_A, slice_B):
    """
    # assign *inplace* to matrix A, doesn't include error checking
    A[0:3, 1:4] = B[1:4, 2:5] -> slicing_2d_with_assignment(A, B, slice_A=((0, 3, 1), (1, 4, 1)), slice_B=((1, 4, 1), (2, 5, 1)))
    A[0:7:2, 1:8:2] = B[1:5:1, 2:6:1] -> slicing_2d_with_assignment(A, B, slice_A=((0, 7, 2), (1, 8, 2)), slice_B=((1, 5, 1), (2, 6, 1)))
    """
    _ = slice_A
    __ = slice_B
    for i, j in zip(range(*slice_A[0]), range(*slice_B[0])):
        A[i][_[1][0]:_[1][1]:_[1][2]] = B[j][__[1][0]:__[1][1]:__[1][2]]


def entrywise_product(matrix_a, matrix_b):
    # or hadamard product
    return [list(map(operator.mul, *m)) for m in zip(matrix_a, matrix_b)]


def full(shape: list, fill_value):
    if len(shape) == 1:
        return [fill_value] * shape[0]
    elif len(shape) == 2:
        return [[fill_value] * shape[1] for _ in range(shape[0])]
    elif len(shape) == 3:
        return [[[fill_value] * shape[2] for _ in range(shape[1])] for __ in range(shape[0])]
    else:
        raise ValueError(shape)


def transpose(matrix, return_map: bool = False):
    if return_map:
        return map(list, zip(*matrix))
    else:
        return list(map(list, zip(*matrix)))


def hstack(matrix_a, matrix_b):
    return list(map(operator.add, matrix_a, matrix_b))


def vstack(matrix_a, matrix_b):
    # only apply to 2d native python list (list of list)
    return matrix_a + matrix_b


# ---------------------------

def add(*matrix_s):
    return [[sum(t) for t in zip(*m)] for m in zip(*matrix_s)]


def subtract(matrix_a, matrix_b):
    return [list(map(operator.sub, *m)) for m in zip(matrix_a, matrix_b)]


def scalar_multiply(matrix, n):
    return [[x * n for x in row] for row in matrix]

# ---


def inverse(matrix):
    det = determinant(matrix)
    if det == 0:
        return None

    matrix_minor = [
        [determinant(minor(matrix, i, j)) for j in range(len(matrix))]
        for i in range(len(matrix))
    ]

    cofactors = [
        [x * (-1) ** (row + col) for col, x in enumerate(matrix_minor[row])]
        for row in range(len(matrix))
    ]
    adjugate = transpose(cofactors)
    return scalar_multiply(adjugate, 1 / det)


def identity(n: int):
    n = int(n)
    return [[int(row == column) for column in range(n)] for row in range(n)]


def minor(matrix, row: int, column: int):
    minor = matrix[:row] + matrix[row + 1:]
    return [row[:column] + row[column + 1:] for row in minor]


def determinant(matrix) -> int:
    if len(matrix) == 1:
        return matrix[0][0]

    return sum(
        x * determinant(minor(matrix, 0, i)) * (-1) ** i
        for i, x in enumerate(matrix[0])
    )


def _check_not_integer(matrix) -> bool:
    if not isinstance(matrix, int) and not isinstance(matrix[0], int):
        return True
    raise TypeError("Expected a matrix, got int/list instead")


def _shape(matrix) -> tuple:
    return len(matrix), len(matrix[0])


def _verify_matrix_sizes(matrix_a, matrix_b):
    shape = _shape(matrix_a) + _shape(matrix_b)
    if shape[0] != shape[3] or shape[1] != shape[2]:
        raise ValueError(
            f"operands could not be broadcast together with shape "
            f"({shape[0], shape[1]}), ({shape[2], shape[3]})"
        )
    return (shape[0], shape[2]), (shape[1], shape[3])


def _matmul(matrix_a, matrix_b):
    # or dot product
    if _check_not_integer(matrix_a) and _check_not_integer(matrix_b):
        rows, cols = _verify_matrix_sizes(matrix_a, matrix_b)
    if cols[0] != rows[1]:
        raise ValueError(
            f"Cannot multiply matrix of dimensions ({rows[0]},{cols[0]}) "
            f"and ({rows[1]},{cols[1]})"
        )
    return [
        [sum(m * n for m, n in zip(i, j)) for j in zip(*matrix_b)] for i in matrix_a
    ]
