def find_saddle_point(matrix):
 
  rows, cols = len(matrix), len(matrix[0])

  for i in range(rows):
   
    min_index = 0
    for j in range(1, cols):
      if matrix[i][j] < matrix[i][min_index]:
        min_index = j

    is_saddle_point = True
    for k in range(rows):
      if matrix[k][min_index] > matrix[i][min_index]:
        is_saddle_point = False
        break

    if is_saddle_point:
      return matrix[i][min_index]

  return None

matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
saddle_point = find_saddle_point(matrix)
print(f"Saddle point: {saddle_point if saddle_point is not None else 'Not found'}")

matrix = [[1, 2, 3], [4, 1, 6], [7, 8, 9]]
saddle_point = find_saddle_point(matrix)
print(f"Saddle point: {saddle_point if saddle_point is not None else 'Not found'}")
