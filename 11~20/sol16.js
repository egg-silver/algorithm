// 문제 설명
// 어떤 정수들이 있습니다.
// 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다.
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

absolutes = [4, 7, 12];
signs = [true, false, true];
// giho = ['+','-','+']

function solution(absolutes, signs) {
  let giho = signs.map((item) => {
    if (item === true) return '+';
    else return '-';
  });
  num = absolutes
    .map((item, index) => giho[index] + item) //['+4', '-7', '+12']
    .map((item) => Number(item));
  sum = num.reduce((sum, cur) => (sum += cur));
  return sum;
}

console.log(solution([4, 7, 12], [true, false, true]));

//이전 풀이
function solution(absolutes, signs) {
  const arr = absolutes.map((item, idx) => {
    return Number((signs[idx] ? '+' : '-') + item);
  });
  let sum = 0;
  arr.forEach((num) => {
    sum = sum + num;
  });
  return sum;
}

//새롬님 풀이

function solution(absolutes, signs) {
  let result = []; // 결과를 담을 빈 배열을 만듭니다.

  for (let i = 0; i < absolutes.length; i++) {
    // 각 숫자와 부호를 가져옵니다.
    let number = absolutes[i]; // absolutes 배열의 i번째 숫자를 가져옵니다.
    let sign = signs[i]; // signs 배열의 i번째 부호를 가져옵니다.

    // 숫자에 부호를 적용하여 합을 계산합니다.
    if (sign) {
      // 부호가 true (양수)이면
      result.push(number); // 원래 숫자를 그대로 결과 배열에 추가합니다.
    } else {
      // 부호가 false (음수)이면
      result.push(-number); // 숫자에 -1을 곱해 음수로 만들고 결과 배열에 추가합니다.
    }
  }

  return result; // 계산된 결과 배열을 반환합니다.
}
