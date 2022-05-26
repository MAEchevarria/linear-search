array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(num, num_list):
    for i, x in enumerate(num_list):
        if x == num:
            return i
    else:
        return None

def global_linear_search(num, num_list):
    list = []
    for i, x in enumerate(num_list):
        if x == num:
            list.append(i)
    if bool(list) == False:
        return "None"
    else:
        return list
        