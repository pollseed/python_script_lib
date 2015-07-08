def create_arr():
    return [50,2,1,9]

def maximum(array):
    return "".join(sorted("".join(map(str, array)), reverse=True))

print(maximum(create_arr()))
