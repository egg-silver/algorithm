let arr = [1, 2, 3, 4, 5];

let add = arr.reduce((sum, item) => sum + item); // {} return 이 없습니다.

let add2 = arr.reduce((sum, item) => {
  // {} return이 있습니다
  return sum + item;
});

const sayApple = () => {
  console.log('apple');
  console.log('banana');
  return 'Apple';
};

const sayApple2 = () => 'Apple';
