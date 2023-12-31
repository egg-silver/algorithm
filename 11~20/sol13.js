// 1937년 Collatz란 사람에 의해 제기된 이 추측은,
// 주어진 수가 1이 될 때까지 다음 작업을 반복하면,
// 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어
// 총 8번 만에 1이 됩니다.

// 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요.
// 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.

function solution(num) {
  var answer = 0;

  if (num === 1) {
    return (answer = 0);
  }

  while (true) {
    answer++;
    console.log(answer);

    if (num % 2 === 0) {
      num = num / 2;
      console.log('짝수', answer, num);
    } else {
      num = num * 3 + 1;
      console.log('홀수', answer, num);
    }

    if (num === 1) break;
    else if (answer >= 500) {
      answer = -1;
      break;
    }
  }
  return answer;
}

console.log(solution(1));

//서현님 풀이
function solution(num) {
  let count = 0;

  //입력된 수가 1이면 0 반환
  if (num === 1) {
    return 0;
  }

  //입력된 수가 1이 아니면
  //count가 500이 되면 멈춰

  let isCurrent = true;
  while (isCurrent) {
    count++;

    if (num % 2 === 0) {
      //짝수
      num = num / 2;
    } else {
      //홀수
      num = num * 3 + 1;
    }

    if (num === 1) {
      isCurrent = false;
    } else if (count === 500) {
      count = -1;
      isCurrent = false;
    }
  }

  console.log(count);
  return count;
}
solution(6);
solution(16);
solution(626331);

//다른 사람 풀이
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6));
