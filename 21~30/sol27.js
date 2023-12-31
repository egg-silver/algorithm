// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다.
// 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

arr1 = [
  [1, 2],
  [2, 3],
];
arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  return arr1.map((item, index) => {
    let item2 = arr2[index];
    let num = item.map((item, index) => item + item2[index]);
    return num;
  });
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);

//다른 사람 풀이
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
