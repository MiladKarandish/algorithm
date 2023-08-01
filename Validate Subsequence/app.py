def validateSubsequence(array, sequence):
    arrIndex = 0
    seqIndex = 0
    while arrIndex < len(array) and seqIndex < len(sequence):
        if array[arrIndex] == sequence[seqIndex]:
            seqIndex += 1
        arrIndex += 1
    return seqIndex == len(sequence)


def validateSubsequence2(array, sequence):
    seqIndex = 0
    for value in array:
        if (seqIndex == len(sequence)):
            break
        if sequence[seqIndex] == value:
            seqIndex += 1

    return seqIndex == len(sequence) - 1


print(validateSubsequence2([5, 1, 22, 25, 6, -1, 8, 10, 15,
                           88, 4, 75, 3], [1, 6, -1, 10, 3, 4]))
