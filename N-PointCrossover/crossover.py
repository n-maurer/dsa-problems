def crossover(ns: list, xs: list, ys: list):
    xs_copy = xs
    ys_copy = ys
    # make for no repeats in ns:
    no_repeat_ns = []
    for x in ns:
        if x not in no_repeat_ns:
            no_repeat_ns.append(x)

    no_repeat_ns.sort()

    print(no_repeat_ns)

    # create i and j to be sliding window on no_repeat_ns
    i = 0
    j = 1

    # Make sure i stays in the the range of no_repeat_ns length
    while (i < len(no_repeat_ns)):
        # the indexes we should crossover at
        current = [ns[i]]
        if (j < len(no_repeat_ns)):
            current.append(ns[j])
        else:
            current.append(len(xs))

        xs_copy[current[0]:current[1]], ys_copy[current[0]:current[1]
                                                ] = ys_copy[current[0]:current[1]], xs_copy[current[0]:current[1]]
        i += 2
        j += 2

    # print(xs_copy[1:3])

    return (xs_copy, ys_copy)


print(crossover(ns=[7, 5, 1, 5, 2, 4], xs=[
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1], ys=[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]))
# Expected [1, 2, 1, 1, 2, 1, 1, 2, 2, 2], [2, 1, 2, 2, 1, 2, 2, 1, 1, 1]
