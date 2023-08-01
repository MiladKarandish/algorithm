# Solution 1
def sortedSquaredArray(array):
    sortedSquares = [0 for _ in array]

    for index in range(len(array)):
        value = array[index]
        sortedSquares[index] = value * value

    sortedSquares.sort()
    return sortedSquares


# Solution 2: O(n) time | O(n) space
def sortedSquaredArray2(array):
    sortedSquares = [0 for _ in array]
    smallerValueIndex = 0
    largerValueIndex = len(array) - 1

    for index in reversed(range(len(array))):
        smallerValue = array[smallerValueIndex]
        largerValue = array[largerValueIndex]

        if abs(smallerValue) > abs(largerValue):
            sortedSquares[index] = smallerValue * smallerValue
            smallerValueIndex += 1
        else:
            sortedSquares[index] = largerValue * largerValue
            largerValueIndex -= 1

    return sortedSquares


print(sortedSquaredArray([-7, -5, -4, 3, 6, 8, 9]))
print(sortedSquaredArray2([-7, -5, -4, 3, 6, 8, 9]))
