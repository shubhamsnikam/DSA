def search_sorted_matrix(matrix, target):
  
  rows = len(matrix)
  cols = len(matrix[0])


  i = 0
  j = cols - 1

  while i < rows and j >= 0:
    if matrix[i][j] == target:
      return True
    elif matrix[i][j] < target:

      i += 1
    else:
      j -= 1

  return False


matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22]]
target = 5
found = search_sorted_matrix(matrix, target)
print(f"Target {target} found: {found}")
