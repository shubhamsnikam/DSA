def find_common_elements(matrix):
  
  if not matrix:
    return []

  common_elements = set(matrix[0])
  for row in matrix[1:]:
    common_elements &= set(row)

  return list(common_elements)

matrix = [[1, 2, 3, 4], [2, 4, 1, 6], [2, 3, 1, 8]]
common_elements = find_common_elements(matrix)
print(common_elements)
