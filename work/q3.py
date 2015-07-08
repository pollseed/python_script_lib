def fibonacci_number(n, m, count):
    if count <= 10:
        print(n, end=" ")
        return fibonacci_number(m, n + m, count + 1)

fibonacci_number(0, 1, 0)
