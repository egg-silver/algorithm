function solution(arr, n) {
  let answer = [];

  let newArr = arr.filter((item) => {
    let duplicated = arr.filter((val) => {
      return item === val;
    });

    return duplicated.length === 1;
  });

  answer = newArr
    .map((item) => item[n] + item)
    .sort()
    .map((item) => item.substring(1));
  return answer;
}
let arr = ['coke', 'water', 'glass', 'dog', 'dog', 'yogurt', 'vitamin'];
let n = 2;
console.log(solution(arr, n));
