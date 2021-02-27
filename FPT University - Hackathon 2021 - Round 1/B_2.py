# Solver
def solver(content):
    n, m, t = [int(i) for i in  input().split(' ')]
    array = []
    for _ in range(n):
        array.append([int(i) for i in input().split(' ')])

    for i in range(n):
        for j in range(m):
            if array[i][j] > t:
                array[i][j] = 1
            else:
                array[i][j] = 0

    for i in range(n):
        print(' '.join(map(str, array[i])))


if __name__ == '__main__':
    solver(None)
