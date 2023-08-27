function solution(n) {
  let answer = '';
  for (let i = 0; i < n; i++) {
    answer += ' '.repeat(i);
    sNum = 2 * (n - i) - 1;
    star = '*'.repeat(sNum);
    answer += star + '\n';
  }
  for (let i = 2; i <= n; i++) {
    answer += ' '.repeat(n-i);
    sNum = 2 * (i -1) + 1;
    star = '*'.repeat(sNum);
    answer += star + '\n';
  }
  return answer.trim();
}

let n = 7;
console.log(solution(n));

