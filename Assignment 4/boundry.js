def print_boundary_elements(matrix):
  
  rows = len(matrix)
  cols = len(matrix[0])

  
  for i in range(1, cols - 1):
    print(matrix[0][i], end=" ")


  for i in range(1, cols - 1):
    print(matrix[rows - 1][i], end=" ")


  for i in range(1, rows - 1):
    print(matrix[i][0], end=" ")


  for i in range(1, rows - 1):
    print(matrix[i][cols - 1], end=" ")

 
  if rows > 1 and cols > 1:
    print(matrix[0][0], end=" ")  
    print(matrix[0][cols - 1], end=" ")  
    print(matrix[rows - 1][0], end=" ")  
    print(matrix[rows - 1][cols - 1])  


matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
print_boundary_elements(matrix)
