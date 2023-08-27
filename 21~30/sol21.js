// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
  let str = Math.floor(n / 2);
  let watermelon = '수박'.repeat(str);

  return n % 2 === 0 ? watermelon : watermelon + '수';
}

console.log(solution(5));

// 빈 문자열 배열을 만들어 줍니다.
// 0부터 n-1까지 for 반복문을 사용해서:
// 홀수 번째(0을 포함해서)면 '수'를 배열에 추가
// 짝수 번째면 '박'을 배열에 추가
// 이후, 배열을 join 메소드를 사용하여 문자열로 변환합니다.
// 이렇게 하면, 배열에 원소를 추가하는 연산만 수행하게 되므로 문자열 연산을 줄일 수 있습니다.

function solution(n) {
  let s = [];
  for (let i = 1; i < n + 1; i++) {
    i % 2 !== 0 ? s.push('수') : s.push('박');
  }
  return s.join('');
}

//다른 사람풀이

function solution(n) {
  const waterMelon = '수박'.repeat(n).slice(0, n);
  return waterMelon;
}

console.log(solution(6));
