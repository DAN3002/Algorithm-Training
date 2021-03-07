import os

LANGUAGES = {
    # 0: 'py',
    1: 'java',
    2: 'cpp'
}

...
NUM_OF_TEST = 1
problem = 'A'
language = LANGUAGES[2]
...


if __name__ == '__main__':
    script_path = f'{problem}.{language}'

    if language == 'cpp':
        os.system(f'g++ {problem}.cpp -o {problem}')
    elif language == 'java':
        os.system(f'javac {problem}.java')
    for i in range(1, NUM_OF_TEST + 1):
        test_path = f'testcase/samples-{problem}/'
        print(f'---TestCase {i} ---')
        if language == 'py':
            raise RuntimeError
        elif language == 'cpp':
            os.system(f'./{problem} < {test_path}{i}.in > {test_path}{i}.out_temp')
            with open(f'{test_path}{i}.out') as f: expected = f.readlines()
            with open(f'{test_path}{i}.out_temp') as f: reality = f.readlines()
            print(*reality)
            print(f'--- TestCase {i}: ' + ('success' if expected == reality else 'failed') + '---')
            # os.system(f'rm {test_path}{i}.out_temp')
        elif language == 'java':
            os.system(f'java {problem} < {test_path}{i}.in > {test_path}{i}.out_temp')
            with open(f'{test_path}{i}.out') as f: expected = f.readlines()
            with open(f'{test_path}{i}.out_temp') as f: reality = f.readlines()
            print(*reality)
            print(f'--- TestCase {i}: ' + ('success' if expected == reality else 'failed') + '---')
            # os.system(f'rm {test_path}{i}.out_temp')
        else:
            raise RuntimeError

