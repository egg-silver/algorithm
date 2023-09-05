// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.

function solution(s, n) {
  var answer = '';
  let baseNum = 0;

  s.split('').map((text) => {
    if (text === ' ') return (answer += text);

    text === text.toLowerCase()
      ? (baseNum = 'a'.charCodeAt())
      : (baseNum = 'A'.charCodeAt());

    let num = ((text.charCodeAt() - baseNum + n) % 26) + baseNum;
    return (answer += String.fromCharCode(num));
  });

  return answer;
}

//GPT 풀이
function solution(s, n) {
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var char = s[i]; // 문자열 s의 i번째 문자를 char 변수에 저장

    if (char === ' ') {
      answer += char; // 공백은 그대로 추가
    } else {
      var baseCharCode =
        char === char.toLowerCase() ? 'a'.charCodeAt() : 'A'.charCodeAt();
      var newCharCode =
        ((char.charCodeAt() - baseCharCode + n) % 26) + baseCharCode;
      answer += String.fromCharCode(newCharCode);
    }
  }

  return answer;
}

console.log(solution('a B z', 4)); // 예시 입력
