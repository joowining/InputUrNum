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
let input: number;

// 1-3 결과값을 나타낼 DOM 요소를 정의 
const resultSpace = document.querySelector('#result-space')! as HTMLDivElement;
const resultText = document.querySelector('#result-text')! as HTMLElement;

// 1- 버튼 클릭시 해당하는 값이 html에 랜더링되도록 만들기 
submitBtn?.addEventListener('click',(event) =>{
  event.preventDefault();
  input = factorial(+pageInput.value);
  resultText.innerHTML = input.toString();
});