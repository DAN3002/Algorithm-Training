import math


def matmul(matrix_a, matrix_b):
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


def entrywise_product(matrix_a, matrix_b):
    # or hadamard product
    if (
            _check_not_integer(matrix_a)
            and _check_not_integer(matrix_b)
            and _verify_matrix_sizes(matrix_a, matrix_b)
    ):
        return [list(map(math.prod, zip(*m))) for m in zip(matrix_a, matrix_b)]


def full(shape: list, fill_value):
    if len(shape) == 1:
        return [fill_value] * shape[0]
    elif len(shape) == 2:
        return [[fill_value] * shape[1] for _ in range(shape[0])]
    elif len(shape) == 3:
        return [[[fill_value] * shape[2] for _ in range(shape[1])] for __ in range(shape[0])]
    else:
        raise ValueError(shape)


def add(*matrix_s):
    if all(_check_not_integer(m) for m in matrix_s):
        for i in matrix_s[1:]:
            _verify_matrix_sizes(matrix_s[0], i)
        return [[sum(t) for t in zip(*m)] for m in zip(*matrix_s)]


def subtract(matrix_a, matrix_b):
    if (
            _check_not_integer(matrix_a)
            and _check_not_integer(matrix_b)
            and _verify_matrix_sizes(matrix_a, matrix_b)
    ):
        return [[i - j for i, j in zip(*m)] for m in zip(matrix_a, matrix_b)]


def scalar_multiply(matrix, n: int):
    return [[x * n for x in row] for row in matrix]


def transpose(matrix, return_map: bool = False):
    if _check_not_integer(matrix):
        if return_map:
            return map(list, zip(*matrix))
        else:
            return list(map(list, zip(*matrix)))


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


def _shape(matrix) -> list:
    return len(matrix), len(matrix[0])


def _verify_matrix_sizes(matrix_a, matrix_b) -> tuple[list]:
    shape = _shape(matrix_a) + _shape(matrix_b)
    if shape[0] != shape[3] or shape[1] != shape[2]:
        raise ValueError(
            f"operands could not be broadcast together with shape "
            f"({shape[0], shape[1]}), ({shape[2], shape[3]})"
        )
    return (shape[0], shape[2]), (shape[1], shape[3])
