def nval(n):
    if n <= 1:
        return n
    return n + nval(n-1)


result = nval(10)
print(result)
