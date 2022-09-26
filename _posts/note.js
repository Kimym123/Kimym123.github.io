function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right );
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr;
}

// console.log(merge([1,10,50], [2,14,99,100]))
console.log(quickSort([10, 24, 76,73,72,1,9]))