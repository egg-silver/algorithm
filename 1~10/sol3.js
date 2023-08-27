function solution(n) {
  var answer = 0;

  str = n.toString();

  // let arr = [];

  for (let i = 0; i < str.length; i++) {
    let num = Number(str[i]);
    // arr.push(num);
    answer += num;
  }
  // answer = arr.reduce((sum, cur) => sum + cur);

  return answer;
}

console.log(solution(123));

//미경님 답안!
function solution_mk(n) {
  return Array.from(n.toString()) // n을 배열로 만들고 Array.prototype.reduce, map => Array.prototype.map // ['1', '2', '3']
    .map((value) => Number(value)) // => [1, 2, 3]
    .reduce((acc, cur) => acc + cur);
}
