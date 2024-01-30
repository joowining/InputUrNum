// 1. 최초의 기능 구현, 입력한 숫자를 받아와서 함수에 에 넣고 결과값을 출력하기 
// 1-1 팩토리얼 함수 정의 
const factorial = (inputNum : number) : number => {
  let result: number=1
  for(let i=1; i<=inputNum; i++){
    result = result * i;
  }
  return result;
}

// 1-2 dom의 사용자 입력 부분에 접근하기 
// 1-2.1 사용자의 입력 부분 DOM 요소 접근하고 변수화
const pageInput = document.querySelector('#input-number')! as HTMLInputElement;
// 1-2.2 사용자의 버튼 부분을 가져와서 접근하고 변수화 
const submitBtn = document.querySelector('#submit-button')! as HTMLButtonElement;
// 1-2.3 사용자의 입력 숫자를 저장할 변수 선언
// 2. validation에 입력내용을 선검사하기 위해 해당 변수를 이벤트 안으로 이동 
// + 타입도 수정함
// let input: number;

// 1-3 결과값을 나타낼 DOM 요소를 정의 
const resultSpace = document.querySelector('#result-space')! as HTMLDivElement;
const resultText = document.querySelector('#result-text')! as HTMLElement;

// 1-4 버튼 클릭시 해당하는 값이 html에 랜더링되도록 만들기 
submitBtn?.addEventListener('click',(event) =>{
  event.preventDefault();
  let input : string;
  let result : number;
  input = pageInput.value;
  if(validation(input)){
    result = factorial(+input); 
    resultText.innerHTML = result.toString();
  }
});


// 2. input number에 대한 validation 추가
// + validation 기준은 숫자인지 아닌지와 1과 10 사이의 숫자만 입력가능하도록 만들 것이다. 
const validation = ( inputNum : string) : boolean => {
  let transedNum = +inputNum;
  if(isNaN(transedNum)){
    alert("Please input a number");
    pageInput.value = '';
    return false;
  } else {
    if(transedNum>10 || transedNum <1){
      alert("Please input a number between 1 and 10");
      pageInput.value = '';
      return false;
    }else {
      return true;
    }
  }
}