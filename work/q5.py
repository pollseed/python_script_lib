import itertools

def max_array():
    return [x for x in range(0, 10)]
def compute():
    return ['+', '-', '']

def sum(arr):
    for i in itertools.product(compute(), repeat=10):
        result = ''.join(map(str, union(max_array(), i)))
        if result[len(result) - 1] in compute():
            result = result[:len(result) - 1]
        if eval(result) == 100:
            print(result, '=', eval(result))

def union(arr1, arr2):
    result = []
    for i in range(1, len(arr1)):
        result.append(arr1[i])
        result.append(arr2[i])
    return result

print(sum(max_array()))
