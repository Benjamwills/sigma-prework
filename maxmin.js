function maxMin(arr) {
  // Returns an array containing the largest and smallest element of arr.
  let new_arr = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  new_arr.push(min, max);
  return new_arr;
}
