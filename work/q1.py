def sum1(array):
    result = 0
    for a in array:
        result += a
    return result

def sum2(array):
    result = 0
    while len(array) > 0:
        result += array.pop()
    return result

def sum3(n, array):
    if len(array) > 0:
        n += array.pop()
        return sum3(n, array)
    return n

def create_array():
    return [x for x in range(0, 100)]

print(sum1(create_array()))
print(sum2(create_array()))
print(sum3(0, create_array()))
