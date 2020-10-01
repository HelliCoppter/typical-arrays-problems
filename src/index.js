
exports.min = function min (array) {
  let result = 0;
  if (array !== undefined && array[0] !== undefined ) {
    array.sort((a,b) => a - b);
    result = array[0];
  } 
  return result;
}

exports.max = function max (array) {
  let result = 0;
  if ( array !== undefined && array[0] !== undefined ) {
    array.sort((a,b) => a - b);
    result = array[array.length - 1];
  } 
  return result;
}

exports.avg = function avg (array) {
  let result = 0;
  if (array !== undefined && array[0] !== undefined ) {
    result = array.reduce((prev, current) => prev + current, 0) / array.length;
  } 
  return result;
}
