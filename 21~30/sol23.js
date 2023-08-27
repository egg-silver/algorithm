// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

// function solution(left, right) {
//   var answer = 0;

//   for (let i = left; i <= right; i++) {
//     let arr = [];
//     for (let z = 1; z <= i; z++) {
//       i % z === 0 ? arr.push(z) : arr;
//     }
//     arr.length % 2 === 0 ? (answer += i) : (answer -= i);
//   }

//   return answer;
// }
// console.log(solution(1, 3));

//완전 제곱수 활용 -> 완전제곱수를 제외한 모든 수는 약수의 개수가 짝수임
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
  }

  return answer;
}
console.log(solution(13, 17));
