function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // 현재 요소가 최소값이면 교환을 해줄 필요가 없기 때문에 작성한 조건문.
    if (i !== min) {
      swap(arr, i, min)
    }
  }
  return arr
}

console.log(selectionSort([9,1,2,3,4,5,6,7]))
