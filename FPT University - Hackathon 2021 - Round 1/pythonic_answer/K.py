import os

# TEST_MODE = True
TEST_MODE = False
NUM_OF_TEST = 2


def solver(input):
    ...
    n, m = map(int, input().split())
    map1 = [input().split() for _ in range(n)]
    map2 = [input().split() for _ in range(m)]

    def is_overlap(current, map2):
        # len(current) == len(map2)
        # XOR bitwise
        return all(((current[i][0] == '?') ^ (map2[i][0] == '?')) or current[i] == map2[i] != ['?'] for i in range(m))

    def run():
        for i in range(n):
            current = map1[i:i + m]
            if is_overlap(current, map2):
                return i + 1

    print(run())
    ...


if __name__ == '__main__':
    if TEST_MODE:
        for i in range(1, NUM_OF_TEST + 1):
            print(f'----------\nTestCase {i}')
            with open('../testcase/samples-{}/{}.in'.format(os.path.basename(__file__).replace('.py', ''),
                                                            i)) as f: content = f.readlines()
            holder = (_.strip() for _ in content)
            solver(lambda: next(holder))
    else:
        solver(input)
