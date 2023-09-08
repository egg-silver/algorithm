// 문제 설명
// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
//s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 참고로 각 숫자에 대응되는 영단어는 다음 표와 같습니다.
// 숫자	영단어
// 0	zero (4)
// 1	one (3)
// 2	two (3)
// 3	three (5)
// 4	four (4)
// 5	five (4)
// 6	six (3)
// 7	seven (5)
// 8	eight (5)
// 9	nine (4)

function solution(s) {
  var answer = '';
  let char = '';
  let obj = {
    zero: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };

  s.split('').map((item) => {
    char += item;
    for (key in obj) {
      if (key === char) {
        answer += obj[key];
        char = '';
      }
      if (char === obj[key]) {
        answer += Number(obj[key]);
        char = '';
      }
    }
  });
  return Number(answer);
}

console.log(solution('one4seveneight'));

//다른 사람 풀이
function solution(s) {
  let numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

console.log(solution('one4seveneight'));

// console.log(('one4seveneight').split('one')); //[ '', '4seveneight' ]
// console.log(('one4seveneight').split('one').join(1)); //14seveneight