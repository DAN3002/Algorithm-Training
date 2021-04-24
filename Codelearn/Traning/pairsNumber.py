def pairs_number(n,arr):
    if n == 0: return 0
    new_arr = [i+n for i in arr]
    return len(new_arr) + len(arr) - set(arr + new_arr).__len__()