// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

seoul = ['Jane', 'Kim'];
function solution(seoul) {
  var answer = '';
  let kimIdx = 0;
  seoul.map((item, index) => {
    if (item === 'Kim') return (kimIdx = index);
  });
  return `김서방은 ${kimIdx}에 있다`;
}

console.log(kimIdx);

//서현님 답
function solution(seoul) {
  //배열의 요소 하나 하나 확인
  let kimIdx = 0;

  seoul.map((Element, i) => {
    //kim의 인덱스 번호 새로운 변수명에 저장
    if (Element === 'Kim') {
      kimIdx = i;
    }
  });

  //출력문 만들기
  const result = `김서방은 ${kimIdx}에 있다`;
  console.log(result);
  return result;
}
solution(['Jane', 'Kim']);

//다른 사람 풀이
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');

  return '김서방은 ' + idx + '에 있다';
}
