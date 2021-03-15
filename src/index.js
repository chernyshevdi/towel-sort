
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let q = []
  let e = []
  if (typeof matrix == 'undefined') {
    return e;
  }
  for(let i = 0; i < matrix.length; i++) {
    
    if(i % 2 === 0) {
      q.push(matrix[i])
    }
    if(i % 2 !== 0) {
      q.push(matrix[i].reverse())
    }
  }
  let w = [].concat(...q);

  return w || e
}
