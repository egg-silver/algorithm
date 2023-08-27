// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다.
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.

//내 풀이
function solution(n) {
  var answer = 0;
  let arr = [];
  arr = n
    .toString()
    .split('')
    .map((item) => Number(item));
  str = arr
    .sort((a, b) => b - a)
    .toString()
    .split(',')
    .join('')
  answer = Number(str);

  return answer;
}

//다른 사람풀이

function solution(n) {
  var answer = 0;
  let arr = [];
  arr = n
    .toString() //문자열
    .split('') //배열
    .sort()
    .reverse()
    .join('');
  answer = +arr;

  return answer;
}

console.log(solution(118372));
