// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// 제한 조건
// n과 m은 각각 1000 이하인 자연수입니다.

// repeat 사용
function solution(n, m) {
  let answer = '';
  let width = '*'.repeat(n);
  for (let i = 1; i <= m; i++) {
    answer += width;
    if (i < m) answer += '\n';
  }
  return answer;
}

//repeat문 Develop Ver.
function solution(n, m) {
  let width = '*'.repeat(n);
  let answer = (width + '\n').repeat(m).trim();
  return answer;
}

//for문 사용
function solution(n, m) {
  let width = '';
  let answer = '';
  for (let i = 1; i <= n; i++) {
    width += '*';
  }

  for (let z = 1; z <= m; z++) {
    answer += width;
    if (z < m) {
      answer += '\n';
    }
  }
  return answer;
}
console.log(solution(2, 2));

//process 사용
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let width = '*'.repeat(a);
  let answer = (width + '\n').repeat(b).trim();

  console.log(answer);
});
