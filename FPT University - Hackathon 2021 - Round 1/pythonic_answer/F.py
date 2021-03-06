import os
import math
from math import sqrt
from collections import Counter

TEST_MODE = True
# TEST_MODE = False
NUM_OF_TEST = 3


def sim(A: dict, B: dict):
    A_norm = sqrt(sum(num ** 2 for num in A.values()))
    B_norm = sqrt(sum(num ** 2 for num in B.values()))
    same_words = A.keys() & B.keys()
    numerator = sum(A[same_word] * B[same_word] for same_word in same_words)
    out = numerator / (A_norm * B_norm)
    return out


def line_to_vector(line):
    return Counter(line.split())


# Solver
def solver(input):
    ...
    q = input()
    d = int(input())
    D = [input() for _ in range(d)]

    # even no need for vocab
    # vocab = {word for line in D for word in line.split()}

    q_vector = line_to_vector(q)

    out = [(
        line, index, sim(q_vector, line_to_vector(line))
    ) for index, line in enumerate(D)]

    out.sort(key=lambda _: _[1])
    out.sort(key=lambda _: _[2], reverse=True)

    for line, index, similarity in out:
        print(f'{line} ({similarity:.2f})')
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
