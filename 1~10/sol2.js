let arr = [1, 2, 3];

function solution(arr) {
  var answer = 0;
  let add = arr.reduce(
    (sum, item) => sum + item
  );

  answer = add / arr.length;

  return answer;
}

console.log(solution(arr));

// reduce
// 1. acc (누산기)
// 2. cur (현재값)
// acc(10) + cur(arr[0] = 1)
// acc(11) + cur(arr[1] = 2)
// acc(13) + cur(arr[3] = 3)
