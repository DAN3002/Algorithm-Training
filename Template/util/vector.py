import math


def linspace(start, stop, n):
    if n == 1:
        yield stop
        return
    h = (stop - start) / (n - 1)
    for i in range(n):
        yield start + h * i


def dot(vector1, vector2):
    return sum(map(math.prod, zip(vector1, vector2)))


def outer_product(vector1, vector2):
    vector1 = [[_] for _ in vector1]  # transpose
    vector2 = [vector2]
    return [[sum(m * n for m, n in zip(i, j)) for j in zip(*vector2)] for i in vector1]