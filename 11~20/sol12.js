// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.

function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else if (b < a) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else {
    answer = a;
  }
  return answer;
}

console.log(solution(1, 3));

//서현님 풀이

function solution2(a, b) {
  //더해진 숫자를 저장 할 새로운 식별자 생성

  //반복 할 횟수 구하기

  //새로 만들어진 식별자에 a부터 b까지의 숫자 더하기

  //a가 b보다 작다면

  //a가 b보다 크다면

  //반복 할 횟수 구하기
  const count = Math.abs(a - b) + 1;
  let sum = 0;
  let newNum = 0;
  for (let i = 0; i < count; i++) {
    //새로 만들어진 식별자에 a부터 b까지의 숫자 더하기
    if (a < b) {
      //a가 b보다 작다면
      newNum = a + i; //3 + 0 // 3 +1 =4
      sum += newNum; //3 + 4
    } else {
      //a가 b보다 크다면
      newNum = a - i;
      sum += newNum;
    }
    console.log(`a : ${a}, newNum : ${newNum}, sum : ${sum}`);
  }
  console.log(sum);
  console.log('=========================');
  return sum;
}
solution2(3, 5);
solution2(3, 3);
solution2(5, 3);
