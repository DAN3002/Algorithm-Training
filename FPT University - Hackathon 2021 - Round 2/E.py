import os
import math
from collections import Counter

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 3

def solver(input):
    s = 'aeiouy'
    A = list(input().lower())
    A = [el for el in A if el in s]

    count = Counter(A)
    count = sorted([(i, e) for i, e in count.items()], key=lambda x: x[0])
    count = sorted([(i, e) for i, e in count], key=lambda x: x[1], reverse=True)

    out = []
    for i, e in count:
        out.append(f'{i}({e})')

    # print(out)
    print(' '.join(out))


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''), i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
