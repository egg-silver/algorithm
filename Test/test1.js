function solution(arr1, arr2, signs) {
  let answer = [];
  let Arr1 = arr1.map((item, index) => {
    let newSigns = signs[index];
    return item.map((val, idx) => {
      return Number((newSigns[idx] ? '+' : '-') + val);
    });
  });

  let Arr2 = arr2.map((item, index) => {
    let newSigns = signs[index];
    return item.map((val, idx) => {
      return Number((newSigns[idx] ? '+' : '-') + val);
    });
  });

  Arr1.map((add, addIdx) => {
    let newArr2 = Arr2[addIdx];

    answer.push(add.map((item, index) => item + newArr2[index]));
  });
  return answer;
}

let arr1 = [
  [5, 7, 1],
  [2, 3, 5],
];
let arr2 = [
  [5, 1, 6],
  [7, 5, 6],
];
let signs = [
  [true, true, false],
  [false, true, false],
];
console.log(solution(arr1, arr2, signs));
