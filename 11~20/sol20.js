// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

//처음 풀이
function solution(s) {
  var answer = '';
  let long = s.length;

  if (long % 2 === 0) {
    num = long / 2;
    answer = s.slice(num - 1, num + 1);
  } else {
    num = Math.ceil(long / 2);
    answer = s.slice(num - 1, num);
  }
  return answer;
}

//Develop Ver.

function solution(s) {
  var answer = '';
  let strLength = Math.ceil(s.length / 2) - 1;
  return s.length % 2 === 0
    ? s.slice(strLength, strLength + 2)
    : s.slice(strLength, strLength + 1);
}
console.log(solution('abcd'));

//다른 사람 풀이
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//substr은 문자열의 특정 부분을 추출하는 메서드입니다.

// 첫 번째 인자는 시작 인덱스입니다.
// 두 번째 인자는 추출할 문자열의 길이입니다.
