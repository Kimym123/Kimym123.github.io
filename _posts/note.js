function countDown(num) {
  if (num <= 0) { // 종료 조건을 만드는 것
    console.log("End!");
    return;
  }
  console.log(num);
  num--; // 다른 입력값으로 변환해주는 것
  countDown(num); // 재귀함수 호출
}

console.log(countDown(5))