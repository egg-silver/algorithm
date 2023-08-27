function solution(n) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  answer = arr.reduce((add, cur) => add + cur, 0);

  return answer;
}

console.log(solution(0));


//미경님 답
function solution_mk(n) {
  let result = 0; //약수의 합을 나타낼 변수

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) result += i;
  }

  return result;
}
