def print_spiral_order(matrix):
  """
  Prints the elements of a matrix in spiral order.

  Args:
      matrix: A 2D array of integers.
  """
  rows = len(matrix)
  cols = len(matrix[0])

  top = 0
  left = 0
  bottom = rows - 1
  right = cols - 1
  direction = 0

  while top <= bottom and left <= right:
    
    if direction == 0:  
      for j in range(left, right + 1):
        print(matrix[top][j], end=" ")
      top += 1
    elif direction == 1:  
      for i in range(top, bottom + 1):
        print(matrix[i][right], end=" ")
      right -= 1
    elif direction == 2:  
      for j in range(right, left - 1, -1):
        print(matrix[bottom][j], end=" ")
      bottom -= 1
    else:  
      for i in range(bottom, top - 1, -1):
        print(matrix[i][left], end=" ")
      left += 1

    direction = (direction + 1) % 4


matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
print_spiral_order(matrix)
