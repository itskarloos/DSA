def palindore(list):
    if (len(list) <= 1):
        return True
    return list[0] == list[-1] and palindore(list[1:-1])


result = palindore("niggin0")
print(result)
