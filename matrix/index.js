// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(new Array(n).fill(0));
    }
  
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // Wypelnia górny rząd od lewej do prawej
      for (let i = startCol; i <= endCol; i++) {
        result[startRow][i] = counter++;
      }
      startRow++;
  
      // Wypelnia prawa kolumnę od góry do dolu
      for (let i = startRow; i <= endRow; i++) {
        result[i][endCol] = counter++;
      }
      endCol--;
  
      // Wypelnia dolny rząd od prawej do lewej
      if (startRow <= endRow) {
        for (let i = endCol; i >= startCol; i--) {
          result[endRow][i] = counter++;
        }
        endRow--;
      }
  
      // Wypelnia lewą kolumnę od dołu do góry
      if (startCol <= endCol) {
        for (let i = endRow; i >= startRow; i--) {
          result[i][startCol] = counter++;
        }
        startCol++;
      }
    }
  
    return result;
  }

console.log(matrix(2));
console.log(matrix(3));
console.log(matrix(4));

module.exports = matrix;
