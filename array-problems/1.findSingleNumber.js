const findSingleNumber = (arr) => {
  if (arr.length == 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(`mid ${mid} left ${left} right ${right}`);

    if (mid % 2 !== 0) {
      if (arr[mid] === arr[mid - 1]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (mid % 2 === 0) {
      if (arr[mid] === arr[mid + 1]) {
        left = mid + 2;
      } else {
        right = mid;
      }
    }
    if (left === right) {
      return arr[left];
    }
  }
  return -1;
};

console.log(findSingleNumber([1, 1, 2, 2, 3, 4, 4]));
console.log(findSingleNumber([1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]));
console.log(findSingleNumber([1, 1, 2, 3, 3]));
