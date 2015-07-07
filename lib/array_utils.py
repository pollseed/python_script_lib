def union(arr1, arr2):
    result = []
    for i in range(1, len(arr1)):
        result.append(arr1[i])
        result.append(arr2[i])
    return result
