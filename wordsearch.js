const transpose = function(matrix) {
    let outputMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!outputMatrix[j]) {
          outputMatrix.push([matrix[i][j]]);
        } else {
          outputMatrix[j].push(matrix[i][j]);
        }
      }
    }
    return outputMatrix;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch;