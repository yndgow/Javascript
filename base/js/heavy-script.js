window.addEventListener('load', function () {
  console.log('Script Start');

  // 현재 시간을 밀리초로 표현
  let startTime = new Date().getTime(); // 1000 -> 1초
  let delay = 3000;

  // 3초동안 브라우저 블로킹
  while (new Date().getTime() < startTime + delay) {
    // 현재 시간이 startTime + delay(시작 시간 + 3초) 보다 작은 동안은 계속 이 블록 실행
  }
  console.log('Script End');
});
