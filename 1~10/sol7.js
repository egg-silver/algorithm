// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.


//내 풀이
function solution(n) {
  var answer = [];
  let str = n.toString();
  let arr = [...str];
  let rearr = arr.map((item) => Number(item));
  answer = rearr.reverse();
  return answer;
}
console.log(solution(12345));


//다른 사람 답
function solution(n) {
  var answer = [];
  answer = n
    .toString()
    .split('')
    .reverse()
    .map((item) => Number(item));
  return answer;
}
console.log(solution(12345));
